using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
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
        private readonly IErrorHandler _errorHandler;
        private readonly IProfileService _profileService;

        public ProfileController(IUserService userService, IUserProfileService userProfileService, IErrorHandler errorHandler, IProfileService profileService)
        {
            _userService = userService ?? throw new NotImplementedException(nameof(userService));
            _userProfileService = userProfileService ?? throw new NotImplementedException(nameof(userProfileService));
            _errorHandler = errorHandler ?? throw new NotImplementedException(nameof(errorHandler));
            _profileService = profileService;
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

        [HttpGet("{id}")]
        public IActionResult GetProfileContract(int id)
        {
            try
            {
                var profileContract = _profileService.GetProfileContractByUserId(id);
                return Ok(profileContract);
            }
            catch (AppException ex)
            {
                _errorHandler.CaptureAsync(ex);
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpPost("avatar")]
        public string AvatarUpload()
        {
            try
            {
                // check file exists in the posted request
                var file = Request.Form.Files[0];
                if (file.Length <= 0)
                    throw new Exception();

                // pass file to memory stream to convert to byte array
                byte[] bytes;
                using (var ms = new MemoryStream())
                {
                    file.CopyTo(ms);
                    bytes = ms.ToArray();
                }

                // throw exception on failure to convert file to bytes
                if (bytes.Length <= 0)
                    throw new Exception("Unable to read bytes of file");

                // save byte array to database
                _userProfileService.Avatar(bytes);

                // convert byte array into a base64 json string for front end to render as an image
                return JsonConvert.SerializeObject(Convert.ToBase64String(bytes)); ;
            }
            catch (Exception ex)
            {
                return $"JsonConvert.SerializeObject(Error of some kind: {ex.Message})";

            }
        }
    }
}