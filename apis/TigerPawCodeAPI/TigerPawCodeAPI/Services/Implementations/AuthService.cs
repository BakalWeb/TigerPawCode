using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TigerPawCodeAPI.Infrastructure.Configurations;
using TigerPawCodeAPI.Models;
using TigerPawCodeAPI.Services.Interfaces;

namespace TigerPawCodeAPI.Services.Implementations
{
    public class AuthService : IAuthService
    {
        private readonly IdentityConfiguration _identityConfig;
        private readonly IErrorHandler _errorHandler;
        private readonly IUserService _userService;

        public AuthService(IdentityConfiguration identityConfig, IErrorHandler errorHandler, IUserService userService)
        {
            _identityConfig = identityConfig ?? throw new Exception("IdentityConfiguration not initialized");
            _errorHandler = errorHandler ?? throw new NotImplementedException(nameof(errorHandler));
            _userService = userService;
        }

        public async Task<bool> ValidateRequest(UserLogin login)
        {
            return await Task.FromResult(false);
            //try
            //{
            //    if (login.Username != _identityConfig.Username)
            //        return await Task.FromResult(false);
            //    else if (login.Password != _identityConfig.Password)
            //        return await Task.FromResult(false);

            //    return await Task.FromResult(true);
            //}
            //catch (Exception e)
            //{
            //    await _errorHandler.CaptureAsync(e);
            //    throw;
            //}
        }
    }
}
