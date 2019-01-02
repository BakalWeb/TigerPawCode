using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TigerPawCodeAPI.Models
{
    public class Subscriber
    {
        public int Id { get; set; }

        public string Email { get; set; }

        public DateTime DateSubscribed { get; set; }

        public DateTime? DateUnsubscribed { get; set; }
    }
}
