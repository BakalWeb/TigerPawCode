using System;
using System.Linq;
using TigerPawCodeAPI.Infrastructure.Helpers;
using TigerPawCodeAPI.Models;
using TigerPawCodeAPI.Services.Interfaces;

namespace TigerPawCodeAPI.Services.Implementations
{
    public class UserProfileService : IUserProfileService
    {
        private readonly DataContext _context;
        private IErrorHandler _errorHandler;

        public UserProfileService(DataContext context, IErrorHandler errorHandler)
        {
            _context = context ?? throw new NotImplementedException(nameof(context));
            _errorHandler = errorHandler ?? throw new NotImplementedException(nameof(errorHandler));
        }

        public void Avatar(byte[] file)
        {
            try
            {
                var result = _context.UserProfiles.FirstOrDefault(x => x.UserId == 3);
                result.Avatar = file;
                _context.UserProfiles.Update(result);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public UserProfile GetByUserId(int id)
        {
            try
            {
                return _context.UserProfiles.FirstOrDefault(x => x.UserId == id);
            }
            catch (AppException ex)
            {
                _errorHandler.CaptureAsync(ex);
                throw ex;
            }
        }

        public UserProfile Update(UserProfile model)
        {
            try
            {
                // ensure model exists
                if (!_context.UserProfiles.Any(x => x.Id == model.Id))
                    throw new AppException("Unable to find UserProfile to update");

                // update model
                var existingRecord = _context.UserProfiles.FirstOrDefault(x => x.Id == model.Id);

                existingRecord.AboutMe = model.AboutMe;

                _context.UserProfiles.Update(existingRecord);
                _context.SaveChanges();

                return model;

            }
            catch (AppException ex)
            {
                _errorHandler.CaptureAsync(ex);
                throw ex;
            }
        }
    }
}
