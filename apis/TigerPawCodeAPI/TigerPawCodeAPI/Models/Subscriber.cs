using System;

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
