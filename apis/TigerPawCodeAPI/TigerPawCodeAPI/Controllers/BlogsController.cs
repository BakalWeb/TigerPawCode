using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Sentry;
using TigerPawCodeAPI.Models;
using TigerPawCodeAPI.Services.Interfaces;

namespace TigerPawCodeAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogsController : ControllerBase
    {
        private readonly IBlogService _blogService;
        private readonly IErrorHandler _errorHandler;
        public BlogsController(IBlogService blogService, IErrorHandler errorHandler)
        {
            _blogService = blogService ?? throw new NotImplementedException(nameof(blogService));
            _errorHandler = errorHandler ?? throw new NotImplementedException(nameof(errorHandler));
        }

        [HttpGet]
        public async Task<IActionResult> GetAllBlogs()
        {
            try
            {
                IEnumerable<Blog> result = await _blogService.GetAllBlogs();
                return Ok(result);
            }
            catch (Exception e)
            {
                await _errorHandler.CaptureAsync(e);
                throw;
            }
        }

        [HttpGet("live")]
        public async Task<IActionResult> GetLiveBlogs()
        {
            try
            {
                IEnumerable<Blog> result = await _blogService.GetLiveBlogs();
                return Ok(result);
            }
            catch (Exception e)
            {
                await _errorHandler.CaptureAsync(e);
                throw;
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetBlog(int id)
        {
            try
            {
                Blog result = await _blogService.GetBlog(id);
                return Ok(result);
            }
            catch (Exception e)
            {
                await _errorHandler.CaptureAsync(e);
                throw;
            }
        }

        [HttpPost]
        public async Task<IActionResult> CreateBlog(Blog model)
        {
            try
            {
                Blog result = await _blogService.CreateBlog(model);
                return Ok(result);
            }
            catch (Exception e)
            {
                await _errorHandler.CaptureAsync(e);
                throw;
            }
        }

        [HttpPut]
        public async Task<IActionResult> UpdateBlog(Blog model)
        {
            try
            {
                var result = await _blogService.UpdateBlog(model);
                return Ok(result);
            }
            catch (Exception e)
            {
                await _errorHandler.CaptureAsync(e);
                throw;
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBlog(int id)
        {
            try
            {
                var result = await _blogService.DeleteBlog(id);
                return Ok(result);
            }
            catch (Exception e)
            {
                await _errorHandler.CaptureAsync(e);
                throw;
            }
        }
    }
}