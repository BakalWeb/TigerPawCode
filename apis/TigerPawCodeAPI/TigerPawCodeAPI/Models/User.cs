using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TigerPawCodeAPI.Models
{
    public class User
    {
        public int Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string FullName => $"{this.FirstName} {this.LastName}";

        public string Username { get; set; }

        public string Password { get; set; }
        public byte[] PasswordHash { get; set; }

        public byte[] PasswordSalt { get; set; }

        public string Email { get; set; }

        public bool Subscribed { get; set; }

        public Role Role { get; set; }

        public DateTime DateCreated { get; set; }

        public DateTime LastModified { get; set; }

        public DateTime? UserDeleted { get; set; }
    }
}
