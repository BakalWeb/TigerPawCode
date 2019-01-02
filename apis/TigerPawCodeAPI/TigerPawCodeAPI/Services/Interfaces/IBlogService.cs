using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TigerPawCodeAPI.Models;

namespace TigerPawCodeAPI.Services.Interfaces
{
    public interface IBlogService
    {
        Task<IEnumerable<Blog>> GetAllBlogs();

        Task<IEnumerable<Blog>> GetLiveBlogs();

        Task<Blog> GetBlog(int id);

        Task<Blog> UpdateBlog(Blog model);

        Task<Blog> CreateBlog(Blog model);

        Task<Blog> DeleteBlog(int id);
    }
}
