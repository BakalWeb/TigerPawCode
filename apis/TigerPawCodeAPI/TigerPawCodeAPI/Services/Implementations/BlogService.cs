using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TigerPawCodeAPI.Models;
using TigerPawCodeAPI.Services.Interfaces;
using TigerPawCodeAPI.Utilities;

namespace TigerPawCodeAPI.Services.Implementations
{
    public class BlogService : IBlogService
    {
        private readonly DataContext _context;

        public BlogService(DataContext context)
        {
            _context = context ?? throw new NotImplementedException(nameof(context));
        }

        public async Task<IEnumerable<Blog>> GetAllBlogs()
        {
            return await _context.Blogs.ToListAsync();
        }

        public async Task<IEnumerable<Blog>> GetLiveBlogs()
        {
            return await _context.Blogs
                .Where(x => x.DateLive != null)
                .Where(x => x.Status == BlogItemStatus.published)
                .OrderByDescending(x => x.DateLive)
                .ToListAsync();
        }

        public async Task<Blog> GetBlog(int id)
        {
            return await _context.Blogs.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<Blog> UpdateBlog(Blog model)
        {
            var result = await GetBlog(model.Id);
            if (result == null) return null;

            model.EstimatedReadingTime = ReadingTime.CalculateEstimatedReadingTime(model.Content);

            _context.Entry(result).CurrentValues.SetValues(model);
            await _context.SaveChangesAsync();

            return await GetBlog(model.Id);
        }

        public async Task<Blog> CreateBlog(Blog model)
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

        public async Task<Blog> DeleteBlog(int id)
        {
            var result = await GetBlog(id);
            if (result == null) return null;

            result.DateDeleted = DateTime.Now;
            _context.Entry(result).CurrentValues.SetValues(result);
            await _context.SaveChangesAsync();

            return await GetBlog(result.Id);

        }
    }
}
