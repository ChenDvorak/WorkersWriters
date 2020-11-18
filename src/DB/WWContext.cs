using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace DB
{
    public class WWContext : DbContext
    {
        private readonly IConfiguration _configuration;
        public WWContext(IConfiguration configuration,  DbContextOptions options) : base(options)
        {
            _configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite(_configuration.GetConnectionString("SQLite"));
        }

        public DbSet<Tables.User> Users { get; set; }
        public DbSet<Tables.Article> Articles { get; set; }
        public DbSet<Tables.Section> Sections { get; set; }
    }
}
