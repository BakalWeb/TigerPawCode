using System;
using System.Linq;
using TigerPawCodeAPI.Infrastructure.Helpers;
using TigerPawCodeAPI.Models;
using TigerPawCodeAPI.Models.Contracts;
using TigerPawCodeAPI.Services.Interfaces;
using TigerPawCodeAPI.Utilities;

namespace TigerPawCodeAPI.Services.Implementations
{
    public class AuthenticationService : IAuthenticationService
    {
        private readonly DataContext _context;
        private readonly IErrorHandler _errorHandler;

        public AuthenticationService(DataContext context, IErrorHandler errorHandler)
        {
            _context = context ?? throw new NotImplementedException(nameof(context));
            _errorHandler = errorHandler ?? throw new NotImplementedException(nameof(errorHandler));
        }

        public User Authenticate(UserContract userContract)
        {
            try
            {
                if (string.IsNullOrEmpty(userContract.Username) || string.IsNullOrEmpty(userContract.Password))
                    return null;

                var user = _context.Users.SingleOrDefault(x => x.Username == userContract.Username);

                // check if username exists
                if (user == null)
                    return null;

                // check if password is correct
                if (!PasswordUtility.VerifyPasswordHash(userContract.Password, user.PasswordHash, user.PasswordSalt))
                    return null;

                // authentication successful
                return user;
            }
            catch (AppException ex)
            {
                _errorHandler.CaptureAsync(ex);
                throw ex;
            }
        }
    }
}
