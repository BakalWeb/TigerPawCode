using System;

namespace TigerPawCodeAPI.Models
{
    public class Role
    {
        public int Id { get; set; }

        public string RoleName { get; set; }

        public bool Admin { get; set; }

        public DateTime RoleCreated { get; set; }

        public DateTime? RoleDeleted { get; set; }
    }
}
