using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TigerPawCodeAPI.Infrastructure.Helpers;
using TigerPawCodeAPI.Models.Contracts;
using TigerPawCodeAPI.Services.Interfaces;

namespace TigerPawCodeAPI.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class ProfileController : Controller
    {
        private readonly IUserService _userService;
        private readonly IUserProfileService _userProfileService;
        private IErrorHandler _errorHandler;

        public ProfileController(IUserService userService, IUserProfileService userProfileService, IErrorHandler errorHandler)
        {
            _userService = userService ?? throw new NotImplementedException(nameof(userService));
            _userProfileService = userProfileService ?? throw new NotImplementedException(nameof(userProfileService));
            _errorHandler = errorHandler ?? throw new NotImplementedException(nameof(errorHandler));
        }

        [HttpPost("update")]
        public IActionResult Update([FromBody] ProfileContract profileContract)
        {
            try
            {
                // todo should we make an in memory copy of the original record to rollback to if the userprofile update fails?
                // update user
                var userUpdate = _userService.Update(profileContract.UserContract);

                // update userprofile
                var userProfileUpdate = userUpdate != null ? _userProfileService.Update(profileContract.UserProfile) : null;

                if (userUpdate != null && userProfileUpdate != null)
                    return Ok(profileContract);

                // throw exception if we have reached here as one of the models within the contract hasnt been updated
                throw new Exception("Model within the ProfileContract has failed to update");
            }
            catch (AppException ex)
            {
                _errorHandler.CaptureAsync(ex);
                return BadRequest(new { message = ex.Message });
            }
        }
    }
}