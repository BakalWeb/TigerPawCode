using TigerPawCodeAPI.Models;
using TigerPawCodeAPI.Models.Dtos;

namespace TigerPawCodeAPI.Services.Interfaces
{
    public interface IAuthenticationService
    {
        User Authenticate(UserContract userContract);
    }
}
