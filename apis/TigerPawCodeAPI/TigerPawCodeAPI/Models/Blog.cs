using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TigerPawCodeAPI.Models
{
    public class Blog
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
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

        public DateTime? DateDeleted { get; set; }
    }

    public enum BlogItemStatus
    {
        draft,
        published,
        deleted
    }
}
