using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using TigerPawCodeAPI.Infrastructure.Configurations;
using TigerPawCodeAPI.Infrastructure.Helpers;
using TigerPawCodeAPI.Models.Contracts;
using TigerPawCodeAPI.Services.Interfaces;

namespace TigerPawCodeAPI.Controllers
{
    [AllowAnonymous]
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : Controller
    {
        private readonly IAuthenticationService _authenticationService;
        private IErrorHandler _errorHandler;
        private readonly AppSettings _appSettings;

        public AuthenticationController(IAuthenticationService authenticationService, IOptions<AppSettings> appSettings, IErrorHandler errorHandler)
        {
            _authenticationService = authenticationService ?? throw new NotImplementedException(nameof(authenticationService));
            _errorHandler = errorHandler ?? throw new NotImplementedException(nameof(errorHandler));
            _appSettings = appSettings.Value ?? throw new Exception("No value for AppSettings");
        }

       
        [HttpPost]
        public IActionResult Authenticate([FromBody]UserContract userContract)
        {
            try
            {
                var user = _authenticationService.Authenticate(userContract);

                if (user == null)
                    return new UnauthorizedResult();

                var tokenHandler = new JwtSecurityTokenHandler();
                var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                    new Claim(ClaimTypes.Name, user.Id.ToString())
                    }),
                    Expires = DateTime.UtcNow.AddHours(4),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
                };
                var token = tokenHandler.CreateToken(tokenDescriptor);
                var tokenString = tokenHandler.WriteToken(token);

                // return basic user info (without password) and token to store client side
                return Ok(new
                {
                    Id = user.Id,
                    Username = user.Username,
                    FirstName = user.FirstName,
                    LastName = user.LastName,
                    Token = tokenString,
                    Expiry = DateTime.Now.AddHours(4)
                });
            }
            catch (AppException ex)
            {
                _errorHandler.CaptureAsync(ex);
                return BadRequest(new { message = ex.Message });
            }
        }
    }
}