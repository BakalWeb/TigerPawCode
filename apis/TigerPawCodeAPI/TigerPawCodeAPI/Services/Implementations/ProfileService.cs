using System.Linq;
using AutoMapper;
using TigerPawCodeAPI.Models;
using TigerPawCodeAPI.Models.Contracts;
using TigerPawCodeAPI.Services.Interfaces;

namespace TigerPawCodeAPI.Services.Implementations
{
    public class ProfileService : IProfileService
    {
        private DataContext _context;
        private readonly IUserService _userService;
        private readonly IUserProfileService _userProfileService;
        private readonly IMapper _mapper;

        public ProfileService(DataContext context, IUserService userService, IUserProfileService userProfileService, IMapper mapper)
        {
            _context = context;
            _userService = userService;
            _userProfileService = userProfileService;
            _mapper = mapper;
        }

        public ProfileContract GetProfileContractByUserId(int id)
        {
            var profileContract = new ProfileContract
            {
                UserContract = _mapper.Map<UserContract>(_userService.GetById(id)),
                UserProfile = _context.UserProfiles.FirstOrDefault(x => x.UserId == id)
            };

            return profileContract;
        }
    }
}