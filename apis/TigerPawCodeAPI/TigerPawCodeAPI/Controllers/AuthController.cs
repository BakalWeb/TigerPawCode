using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net.Http;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using TigerPawCodeAPI.Models;
using TigerPawCodeAPI.Services.Interfaces;

namespace TigerPawCodeAPI.Controllers
{
    [AllowAnonymous]
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;
        private readonly IErrorHandler _errorHandler;

        public AuthController(IAuthService authService, IErrorHandler errorHandler)
        {
            _authService = authService ?? throw new NotImplementedException(nameof(authService));
            _errorHandler = errorHandler ?? throw new NotImplementedException(nameof(errorHandler));
        }

        [HttpPost, Route("login")]
        public async Task<IActionResult> Login([FromBody] UserLogin login)
        {
            try
            {
                if (login == null)
                    return new BadRequestResult();
            
                if (string.IsNullOrEmpty(login.Username) || string.IsNullOrEmpty(login.Password))
                    return new UnauthorizedResult();

                if (await _authService.ValidateRequest(login) == false)
                    return new UnauthorizedResult();

                var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("supersimplejhMaj381"));

                var signInCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

                var tokenOptions = new JwtSecurityToken(
                    issuer: "https://localhost:5001",
                    audience: "https://localhost:5001",
                    claims: new List<Claim>(),
                    expires: DateTime.Now.AddMinutes(1),
                    signingCredentials: signInCredentials
                );

                var tokenString = new JwtSecurityTokenHandler().WriteToken(tokenOptions);
                return Ok(new {Token = tokenString});
            }
            catch (Exception e)
            {
                await _errorHandler.CaptureAsync(e);
                throw;
            }
        }
    }
}
