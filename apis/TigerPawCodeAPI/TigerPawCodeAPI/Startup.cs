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

            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder => builder.AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader()
                        .AllowCredentials());
            });

            // authentication
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                    .AddJwtBearer(options =>
                    {
                        options.TokenValidationParameters = new TokenValidationParameters
                        {
                            ValidateIssuer = true,
                            ValidateAudience = true,
                            ValidateLifetime = true,
                            ValidateIssuerSigningKey = true,

                            ValidIssuer = "https://localhost:5001",
                            ValidAudience = "https://localhost:5001",
                            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("supersimplejhMaj381"))
                        };
                    });

            // sql connection
            string connection = @"Server=tcp:tigerpawcode.database.windows.net,1433;Initial Catalog=tiger-paw-code;Persist Security Info=False;User ID=bakalweb;Password=NddM*8qEWd9%JwZE; MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";
            services.AddDbContext<DataContext>
                (options => options.UseSqlServer(connection));

            // configurations
            services.AddSingleton(Configuration.GetSection("Identity").Get<IdentityConfiguration>()); // identity
            services.AddSingleton(Configuration.GetSection("Sentry").Get<SentryConfiguration>()); // logging

            // services
            services.AddTransient<IAuthService, AuthService>();
            services.AddTransient<IBlogService, BlogService>();
            services.AddScoped<IErrorHandler, ErrorHandler>();

            // swagger
            services.AddSwaggerGen(c =>
            {
                c.ResolveConflictingActions(apiDescriptions => apiDescriptions.First());
                c.SwaggerDoc("v1", new Info { Title = "My API", Version = "v1" });
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
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
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
