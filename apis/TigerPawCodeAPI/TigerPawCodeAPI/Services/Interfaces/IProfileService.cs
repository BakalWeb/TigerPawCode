using TigerPawCodeAPI.Models.Contracts;

namespace TigerPawCodeAPI.Services.Interfaces
{
    public interface IProfileService
    {
        ProfileContract GetProfileContractByUserId(int id);
    }
}