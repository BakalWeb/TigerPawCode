using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TigerPawCodeAPI.Models
{
    public class Blog
    {
        public int Id { get; set; }

        public string Headline { get; set; }

        public string ShortDescription { get; set; }

        public int EstimatedReadingTime { get; set; }

        public DateTime DateCreated { get; set; }

        public BlogItemStatus Status { get; set; }

        public bool Promoted { get; set; }

        public string Content { get; set; }

        public string Thumbnail { get; set; }

        public string Author { get; set; }

        public DateTime? DateLive { get; set; }
    }

    public enum BlogItemStatus
    {
        draft,
        published,
        deleted
    }
}
