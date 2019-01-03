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

        public AuthService(IdentityConfiguration identityConfig, IErrorHandler errorHandler)
        {
            _identityConfig = identityConfig ?? throw new Exception("IdentityConfiguration not initialized");
            _errorHandler = errorHandler ?? throw new NotImplementedException(nameof(errorHandler));
        }

        public async Task<bool> ValidateRequest(UserLogin login)
        {
            try
            {
                if (login.Username != _identityConfig.Username)
                    return await Task.FromResult(false);
                else if (login.Password != _identityConfig.Password)
                    return await Task.FromResult(false);

                return await Task.FromResult(true);
            }
            catch (Exception e)
            {
                await _errorHandler.CaptureAsync(e);
                throw;
            }
        }
    }
}
