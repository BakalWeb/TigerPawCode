using System;
using System.Collections.Generic;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TigerPawCodeAPI.Infrastructure.Helpers;
using TigerPawCodeAPI.Models;
using TigerPawCodeAPI.Models.Dtos;
using TigerPawCodeAPI.Services.Interfaces;

namespace TigerPawCodeAPI.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        private IMapper _mapper;
        private IErrorHandler _errorHandler;
        
        public UserController(IUserService userService, IMapper mapper, IErrorHandler errorHandler)
        {
            _userService = userService;
            _mapper = mapper;
            _errorHandler = errorHandler ?? throw new NotImplementedException(nameof(errorHandler));
        }

        [AllowAnonymous]
        [HttpPost("register")]
        public IActionResult Register([FromBody]UserContract userContract)
        {
            // map dto to entity
            var user = _mapper.Map<User>(userContract);

            try
            {
                return Ok(_userService.Create(user));
            }
            catch (AppException ex)
            {
                _errorHandler.CaptureAsync(ex);
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            try
            {
                var users = _userService.GetAll();
                var UserContracts = _mapper.Map<IList<UserContract>>(users);
                return Ok(UserContracts);
            }
            catch (AppException ex)
            {
                _errorHandler.CaptureAsync(ex);
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            try
            {
                var user = _userService.GetById(id);
                var UserContract = _mapper.Map<UserContract>(user);
                return Ok(UserContract);
            }
            catch (AppException ex)
            {
                _errorHandler.CaptureAsync(ex);
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody]User user)
        {
            //// map dto to entity and set id
            //var user = _mapper.Map<User>(userContract);
            //user.Id = id;

            try
            {
                _userService.Update(user);
                return Ok();
            }
            catch (AppException ex)
            {
                _errorHandler.CaptureAsync(ex);
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                _userService.Delete(id);
                return Ok();
            }
            catch (AppException ex)
            {
                _errorHandler.CaptureAsync(ex);
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpGet("username/{username}")]
        public IActionResult ValidUsername(string username)
        {
            try
            {
                var result = _userService.ValidUsername(username);
                return Ok(result);
            }
            catch (Exception ex)
            {
                _errorHandler.CaptureAsync(ex);
                return BadRequest(new { message = ex.Message });
            }
        }
    }
}
