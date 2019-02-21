using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TigerPawCodeAPI.Models;
using TigerPawCodeAPI.Models.Dtos;

namespace TigerPawCodeAPI.Services.Interfaces
{
    public interface IUserService
    {
        User Authenticate(UserDto userDto);

        User GetById(int id);

        User Create(User user);

        IEnumerable<User> GetAll();

        User Update(User user);

        bool Delete(int id);

        bool ValidUsername(string value);
    }
}
