using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TigerPawCodeAPI.Infrastructure.Helpers;
using TigerPawCodeAPI.Models;
using TigerPawCodeAPI.Services.Interfaces;
using TigerPawCodeAPI.Utilities;

namespace TigerPawCodeAPI.Services.Implementations
{
    public class BlogService : IBlogService
    {
        private readonly DataContext _context;
        private IErrorHandler _errorHandler;

        public BlogService(DataContext context, IErrorHandler errorHandler)
        {
            _context = context ?? throw new NotImplementedException(nameof(context));
            _errorHandler = errorHandler ?? throw new NotImplementedException(nameof(errorHandler));
        }

        public async Task<IEnumerable<Blog>> GetAllBlogs()
        {
            try
            {
                return await _context.Blogs.ToListAsync();
            }
            catch (AppException ex)
            {
                await _errorHandler.CaptureAsync(ex);
                throw ex;
            }
        }

        public async Task<IEnumerable<Blog>> GetLiveBlogs()
        {
            try
            {
                return await _context.Blogs
                .Where(x => x.DateLive != null)
                .Where(x => x.Status == BlogItemStatus.published)
                .OrderByDescending(x => x.DateLive)
                .ToListAsync();
            }
            catch (AppException ex)
            {
                await _errorHandler.CaptureAsync(ex);
                throw ex;
            }            
        }

        public async Task<Blog> GetBlog(int id)
        {
            try
            {
                return await _context.Blogs.FirstOrDefaultAsync(x => x.Id == id);
            }
            catch (AppException ex)
            {
                await _errorHandler.CaptureAsync(ex);
                throw ex;
            }
        }

        public async Task<Blog> UpdateBlog(Blog model)
        {
            try
            {
                var result = await GetBlog(model.Id);
                if (result == null) return null;

                model.EstimatedReadingTime = ReadingTime.CalculateEstimatedReadingTime(model.Content);

                _context.Entry(result).CurrentValues.SetValues(model);
                await _context.SaveChangesAsync();

                return await GetBlog(model.Id);
            }
            catch (AppException ex)
            {
                await _errorHandler.CaptureAsync(ex);
                throw ex;
            }
        }

        public async Task<Blog> CreateBlog(Blog model)
        {
            try
            {
                if (await GetBlog(model.Id) != null) return null;

                // assign a datelive if status equals published
                model.DateLive = (model.Status == BlogItemStatus.published && model.DateLive == null) ? DateTime.Now : (DateTime?)null;
                // assign estimated reading time
                model.EstimatedReadingTime = ReadingTime.CalculateEstimatedReadingTime(model.Content);

                _context.Blogs.Add(model);
                await _context.SaveChangesAsync();

                return await GetBlog(model.Id);
            }
            catch (AppException ex)
            {
                await _errorHandler.CaptureAsync(ex);
                throw ex;
            }
        }

        public async Task<Blog> DeleteBlog(int id)
        {
            try
            {
                var result = await GetBlog(id);
                if (result == null) return null;

                result.DateDeleted = DateTime.Now;
                _context.Entry(result).CurrentValues.SetValues(result);
                await _context.SaveChangesAsync();

                return await GetBlog(result.Id);
            }
            catch (AppException ex)
            {
                await _errorHandler.CaptureAsync(ex);
                throw ex;
            }
        }

    }
}
