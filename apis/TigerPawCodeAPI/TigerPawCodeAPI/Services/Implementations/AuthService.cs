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

        public AuthService(IdentityConfiguration identityConfig)
        {
            _identityConfig = identityConfig ?? throw new Exception("IdentityConfiguration not initialized");
        }

        public async Task<bool> ValidateRequest(UserLogin login)
        {
            if (login.Username != _identityConfig.Username)
                return await Task.FromResult(false);
            else if (login.Password != _identityConfig.Password)
                return await Task.FromResult(false);

            return await Task.FromResult(true);
        }
    }
}
