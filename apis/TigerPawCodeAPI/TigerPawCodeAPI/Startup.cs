using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using Sentry;
using Swashbuckle.AspNetCore.Swagger;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TigerPawCodeAPI.Infrastructure.Configurations;
using TigerPawCodeAPI.Infrastructure.Middleware;
using TigerPawCodeAPI.Models;
using TigerPawCodeAPI.Services.Implementations;
using TigerPawCodeAPI.Services.Interfaces;
using SentryConfiguration = TigerPawCodeAPI.Infrastructure.Configurations.SentryConfiguration;

namespace TigerPawCodeAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        private IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);

            services.AddAutoMapper();

            // cors
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder => builder.AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader()
                        .AllowCredentials());
            });

            // configure jwt authentication
            var key = Encoding.ASCII.GetBytes("supersimplejhMaj381");
            services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(x =>
            {
                x.Events = new JwtBearerEvents
                {
                    OnTokenValidated = context =>
                    {
                        var userService = context.HttpContext.RequestServices.GetRequiredService<IUserService>();
                        var userId = int.Parse(context.Principal.Identity.Name);
                        var user = userService.GetById(userId);
                        if (user == null)
                        {
                            // return unauthorized if user no longer exists
                            context.Fail("Unauthorized");
                        }
                        return Task.CompletedTask;
                    }
                };
                x.RequireHttpsMetadata = false;
                x.SaveToken = true;
                x.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                    ValidateIssuer = false,
                    ValidateAudience = false
                };
            });

            // sql connection
            string connection = @"Server=(localdb)\mssqllocaldb;Initial Catalog=tiger-paw-code;Persist Security Info=False;User ID=bakalweb;Password=NddM*8qEWd9%JwZE;";
            //string connection = @"Server=tcp:tigerpawcode.database.windows.net,1433;Initial Catalog=tiger-paw-code;Persist Security Info=False;User ID=bakalweb;Password=NddM*8qEWd9%JwZE; MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";
            services.AddDbContext<DataContext>
                (options => options.UseSqlServer(connection));

            // configurations
            services.AddSingleton(Configuration.GetSection("Identity").Get<IdentityConfiguration>()); // identity
            services.AddSingleton(Configuration.GetSection("Sentry").Get<SentryConfiguration>()); // logging

            var appSettingsSection = Configuration.GetSection("AppSettings");
            services.Configure<AppSettings>(appSettingsSection);

            // services
            services.AddTransient<IBlogService, BlogService>();
            services.AddScoped<IErrorHandler, ErrorHandler>();
            services.AddScoped<IUserService, UserService>();

            // swagger
            services.AddSwaggerGen(c =>
            {
                c.ResolveConflictingActions(apiDescriptions => apiDescriptions.First());
                c.SwaggerDoc("v1", new Info { Title = "TigerPawCode API", Version = "v1" });
            });

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            // logging
            app.UseMiddleware<SentryMiddleware>();

            // cors
            app.UseCors("CorsPolicy");

            // swagger
            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "TigerPawCode API");
                //c.RoutePrefix = string.Empty;
            });

            // auth
            app.UseAuthentication();

            // enforce https
            app.UseHttpsRedirection();

            app.UseMvc();
        }
    }
}
