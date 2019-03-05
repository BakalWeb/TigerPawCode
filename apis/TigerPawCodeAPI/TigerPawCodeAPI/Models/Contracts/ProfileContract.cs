using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TigerPawCodeAPI.Models.Dtos;

namespace TigerPawCodeAPI.Models.Contracts
{
    public class ProfileContract
    {
        public UserContract UserContract { get; set; }

        public UserProfile UserProfile { get; set; }
    }
}
