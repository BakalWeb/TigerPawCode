using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace TigerPawCodeAPI.Utilities
{
    public static class ReadingTime
    {
        private const int WordsReadPerMinute = 200;

        public static int CalculateEstimatedReadingTime(string text)
        {
            try
            {
                var collection = Regex.Matches(text, @"[\S]+");
                return (int)(collection.Count / WordsReadPerMinute);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }
    }
}
