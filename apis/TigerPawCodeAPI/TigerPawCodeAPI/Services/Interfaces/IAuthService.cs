using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TigerPawCodeAPI.Models;

namespace TigerPawCodeAPI.Services.Interfaces
{
    public interface IAuthService
    {
        Task<bool> ValidateRequest(UserLogin login);
    }
}
