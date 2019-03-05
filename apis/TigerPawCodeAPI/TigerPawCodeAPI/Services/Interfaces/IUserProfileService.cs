using TigerPawCodeAPI.Models;

namespace TigerPawCodeAPI.Services.Interfaces
{
    public interface IUserProfileService
    {
        UserProfile GetByUserId(int id);

        UserProfile Update(UserProfile model);
    }
}
