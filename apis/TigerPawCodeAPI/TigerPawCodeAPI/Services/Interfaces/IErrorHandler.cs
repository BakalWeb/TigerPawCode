using System;
using System.Threading.Tasks;

namespace TigerPawCodeAPI.Services.Interfaces
{
    public interface IErrorHandler
    {
        Task CaptureAsync(Exception exception);

        Task CaptureAsync(string message);
    }
}
