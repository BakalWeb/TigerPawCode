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

        public UserProfileService(DataContext context)
        {
            _context = context ?? throw new NotImplementedException(nameof(context));
        }

        public UserProfile GetByUserId(int id)
        {
            try
            {
                return _context.UserProfiles.FirstOrDefault(x => x.UserId == id);
            }
            catch (Exception)
            {

                throw;
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

                throw;
            }
        }
    }
}
