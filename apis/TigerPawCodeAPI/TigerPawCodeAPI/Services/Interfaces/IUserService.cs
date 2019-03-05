using System.Collections.Generic;
using TigerPawCodeAPI.Models;
using TigerPawCodeAPI.Models.Dtos;

namespace TigerPawCodeAPI.Services.Interfaces
{
    public interface IUserService
    {
        User GetById(int id);

        User Create(User user);

        IEnumerable<User> GetAll();

        User Update(User user);

        UserContract Update(UserContract userContract);

        bool Delete(int id);

        bool ValidUsername(string value);
    }
}
