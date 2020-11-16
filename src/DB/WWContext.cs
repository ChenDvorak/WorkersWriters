using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Text;

namespace DB
{
    public class WWContext : DbContext
    {
        private readonly IConfiguration _configuration;
        public WWContext(IConfiguration configuration,  DbContextOptions options) : base(options)
        {
            _configuration = configuration;
        }


    }
}
