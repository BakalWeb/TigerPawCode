using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Encodings.Web;
using TigerPawCodeAPI.Infrastructure.Helpers;
using TigerPawCodeAPI.Models;
using TigerPawCodeAPI.Models.Contracts;
using TigerPawCodeAPI.Services.Interfaces;
using TigerPawCodeAPI.Utilities;

namespace TigerPawCodeAPI.Services.Implementations
{
    public class UserService : IUserService
    {
        private readonly DataContext _context;
        private IErrorHandler _errorHandler;

        public UserService(DataContext context, IErrorHandler errorHandler)
        {
            _context = context ?? throw new NotImplementedException(nameof(context));
            _errorHandler = errorHandler ?? throw new NotImplementedException(nameof(errorHandler));
        }

        public IEnumerable<User> GetAll()
        {
            try
            {
                return _context.Users;
            }
            catch (AppException ex)
            {
                _errorHandler.CaptureAsync(ex);
                throw ex;
            }
        }

        public User GetById(int id)
        {
            try
            {
                return _context.Users.Find(id);
            }
            catch (AppException ex)
            {
                _errorHandler.CaptureAsync(ex);
                throw ex;
            }
        }

        public User Create(User user)
        {
            try
            {
                // validation
                if (string.IsNullOrWhiteSpace(user.Password))
                    throw new AppException("Password is required");

                if (_context.Users.Any(x => x.Username == user.Username))
                    throw new AppException($"Username {user.Username} is already taken");

                byte[] passwordHash, passwordSalt;
                PasswordUtility.CreatePasswordHash(user.Password, out passwordHash, out passwordSalt);

                user.PasswordHash = passwordHash;
                user.PasswordSalt = passwordSalt;
                user.DateCreated = DateTime.Now;
                user.LastModified = DateTime.Now;
                user.Role = _context.Roles.FirstOrDefault(x => x.RoleName.ToLower().Equals("registered"));

                _context.Users.Add(user);
                _context.SaveChanges();

                // we also need to create a user profile entry
                UserProfile userProfile = new UserProfile
                {
                    UserId = user.Id,
                    AboutMe = null
                };

                _context.UserProfiles.Add(userProfile);
                _context.SaveChanges();


                return user;
            }
            catch (AppException ex)
            {
                _errorHandler.CaptureAsync(ex);
                throw ex;
            }
        }

        public User Update(User model)
        {
            try
            {
                var user = _context.Users.Find(model.Id);

                if (user == null)
                    throw new AppException("User not found");

                if (model.Username != user.Username)
                {
                    // username has changed so check if the new username is already taken
                    if (_context.Users.Any(x => x.Username == model.Username))
                        throw new AppException("Username " + model.Username + " is already taken");
                }

                // update user properties
                user.FirstName = model.FirstName;
                user.LastName = model.LastName;
                user.Username = model.Username;

                // update password if it was entered
                if (!string.IsNullOrWhiteSpace(model.Password))
                {
                    byte[] passwordHash, passwordSalt;
                    PasswordUtility.CreatePasswordHash(model.Password, out passwordHash, out passwordSalt);

                    user.PasswordHash = passwordHash;
                    user.PasswordSalt = passwordSalt;
                }

                _context.Users.Update(user);
                _context.SaveChanges();

                return user;
            }
            catch (AppException ex)
            {
                _errorHandler.CaptureAsync(ex);
                throw ex;
            }
        }

        public bool Delete(int id)
        {
            try
            {
                var user = _context.Users.Find(id);
                var row = 0;
                if (user != null)
                {
                    _context.Users.Remove(user);
                    row = _context.SaveChanges();
                }

                return (row == 1) ? true : false;
            }
            catch (AppException ex)
            {
                _errorHandler.CaptureAsync(ex);
                throw ex;
            }
        }

        /// <summary>
        /// Check to see if the username entered is taken or not and if it meets certain criteria
        /// </summary>
        /// <param name="value">Username</param>
        /// <returns>Bool value dictating if the username entered was valid or not</returns>
        public bool ValidUsername(string value)
        {
            try
            {
                // check if value already exists
                var result = _context.Users.Any(x => x.Username.ToLower().Equals(value));
                if (result)
                    return false;

                // valid length
                if (value.Length > 150)
                    return false;

                // contains invalid characters
                var encodedResult = HtmlEncoder.Default.Encode(value);
                if (value != encodedResult)
                    return false;

                return true;

            }
            catch (AppException ex)
            {
                _errorHandler.CaptureAsync(ex);
                throw ex;
            }
        }

        public UserContract Update(UserContract model)
        {
            try
            {
                var user = _context.Users.Find(model.Id);

                if (user == null)
                    throw new AppException("User not found");

                if (model.Username != user.Username)
                {
                    // username has changed so check if the new username is already taken
                    if (_context.Users.Any(x => x.Username == model.Username))
                        throw new AppException("Username " + model.Username + " is already taken");
                }

                // todo change this to use automapper
                // update user properties
                user.LastModified = DateTime.Now;
                user.FirstName = model.FirstName;
                user.LastName = model.LastName;
                user.Username = model.Username;

                // update password if it was entered
                if (!string.IsNullOrWhiteSpace(model.Password))
                {
                    byte[] passwordHash, passwordSalt;
                    PasswordUtility.CreatePasswordHash(model.Password, out passwordHash, out passwordSalt);

                    user.PasswordHash = passwordHash;
                    user.PasswordSalt = passwordSalt;
                }

                _context.Users.Update(user);
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