using Microsoft.EntityFrameworkCore;
using tuc_backend.Models;

namespace tuc_backend.Data
{
    public class DataContext :DbContext
    {

        public DataContext(DbContextOptions<DataContext> options) : base(options) 
        {

        }

        public DbSet<Product> Products { get; set; }
    }
}
