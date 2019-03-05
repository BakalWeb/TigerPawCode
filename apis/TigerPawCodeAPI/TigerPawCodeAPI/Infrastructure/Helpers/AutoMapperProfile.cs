﻿using AutoMapper;
using TigerPawCodeAPI.Models;
using TigerPawCodeAPI.Models.Contracts;

namespace TigerPawCodeAPI.Infrastructure.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<User, UserContract>();
            CreateMap<UserContract, User>();
        }
    }
}