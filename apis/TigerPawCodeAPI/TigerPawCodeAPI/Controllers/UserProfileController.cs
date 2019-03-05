using System;
using Microsoft.AspNetCore.Mvc;
using TigerPawCodeAPI.Infrastructure.Helpers;
using TigerPawCodeAPI.Models;
using TigerPawCodeAPI.Services.Interfaces;

namespace TigerPawCodeAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfileController : Controller
    {
        private readonly IUserProfileService _userProfileService;
        private IErrorHandler _errorHandler;

        public UserProfileController(IUserProfileService userProfileService, IErrorHandler errorHandler)
        {
            _userProfileService = userProfileService ?? throw new NotImplementedException(nameof(userProfileService));
            _errorHandler = errorHandler ?? throw new NotImplementedException(nameof(errorHandler));
        }

        [HttpGet("{id}")]
        public IActionResult GetByUserId(int id)
        {
            try
            {
                var result = _userProfileService.GetByUserId(id);
                return Ok(result);
            }
            catch (AppException ex)
            {
                _errorHandler.CaptureAsync(ex);
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpPost("{id}")]
        public IActionResult Update(int id, [FromBody] UserProfile userProfile)
        {
            try
            {
                var result = _userProfileService.Update(userProfile);
                return Ok(result);
            }
            catch (AppException ex)
            {
                _errorHandler.CaptureAsync(ex);
                return BadRequest(new { message = ex.Message });
            }
        }

    }
}