using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using TigerPawCodeAPI.Services.Interfaces;

namespace TigerPawCodeAPI.Infrastructure.Middleware
{
    public class SentryMiddleware
    {
        private readonly RequestDelegate _requestDelegate;

        public SentryMiddleware(RequestDelegate requestDelegate)
        {
            _requestDelegate = requestDelegate ?? throw new ArgumentNullException(nameof(requestDelegate));
        }

        public async Task Invoke(HttpContext httpContext, IErrorHandler errorHandler)
        {
            try
            {
                await _requestDelegate(httpContext);
            }
            catch (Exception ex)
            {
                await errorHandler.CaptureAsync(ex);
                throw;
            }
        }
    }
}