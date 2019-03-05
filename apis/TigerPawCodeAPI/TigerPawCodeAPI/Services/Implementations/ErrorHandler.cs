using System;
using System.Threading.Tasks;
using SharpRaven;
using TigerPawCodeAPI.Services.Interfaces;
using SentryConfiguration = TigerPawCodeAPI.Infrastructure.Configurations.SentryConfiguration;

namespace TigerPawCodeAPI.Services.Implementations
{
    public class ErrorHandler : IErrorHandler
    {
        private readonly IRavenClient _client;

        public ErrorHandler(SentryConfiguration sentryConfiguration)
        {
            if (sentryConfiguration == null)
                throw new ArgumentNullException(nameof(sentryConfiguration));

            if (string.IsNullOrEmpty(sentryConfiguration.Dsn.ToString()))
                throw new ArgumentNullException("Can not construct a SentryErrorReporter without a valid DSN!");

            _client = new RavenClient(sentryConfiguration.Dsn.ToString());
        }

        /// <summary>
        ///     Captures the specified exception asynchronously and hands it off to an error handling service.
        /// </summary>
        /// <param name="exception">The exception.</param>
        /// <returns></returns>
        /// <exception cref="System.ArgumentNullException">exception</exception>
        public async Task CaptureAsync(Exception exception)
        {
            if (exception == null)
                throw new ArgumentNullException(nameof(exception));

            await _client.CaptureAsync(new SharpRaven.Data.SentryEvent(exception));
        }

        /// <summary>
        ///     Captures the specified message asynchronously and hands it off to an error handling service.
        /// </summary>
        /// <param name="message">The message.</param>
        /// <returns></returns>
        /// <exception cref="System.ArgumentNullException">message</exception>
        public async Task CaptureAsync(string message)
        {
            if (string.IsNullOrEmpty(message))
                throw new ArgumentNullException(nameof(message));

            await _client.CaptureAsync(new SharpRaven.Data.SentryEvent(message));
        }
    }
}