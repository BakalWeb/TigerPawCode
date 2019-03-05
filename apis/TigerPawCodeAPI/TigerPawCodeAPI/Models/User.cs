using System;

namespace TigerPawCodeAPI.Models
{
    public abstract class UserBase
    {
        public int Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }
        
        public string Username { get; set; }

        public string Email { get; set; }

        public bool Subscribed { get; set; }

        public DateTime DateCreated { get; set; }

        public DateTime LastModified { get; set; }
    }

    public class User : UserBase
    {
        public string FullName => $"{this.FirstName} {this.LastName}";

        public string Password { get; set; }
        public byte[] PasswordHash { get; set; }

        public byte[] PasswordSalt { get; set; }

        public Role Role { get; set; }

        public DateTime? UserDeleted { get; set; }
    }
}
