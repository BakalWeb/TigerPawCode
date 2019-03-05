using TigerPawCodeAPI.Models;
using TigerPawCodeAPI.Models.Contracts;

namespace TigerPawCodeAPI.Services.Interfaces
{
    public interface IAuthenticationService
    {
        User Authenticate(UserContract userContract);
    }
}
