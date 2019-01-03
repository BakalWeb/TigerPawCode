using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TigerPawCodeAPI.Services.Interfaces
{
    public interface IErrorHandler
    {
        Task CaptureAsync(Exception exception);

        Task CaptureAsync(string message);
    }
}
