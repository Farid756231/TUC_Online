using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using tuc_backend.Models;
using IdentityUser = Microsoft.AspNetCore.Identity.IdentityUser;

namespace tuc_backend.Data;

public class DataContext : DbContext
{
    public DataContext(DbContextOptions<DataContext> options) : base(options)
    {
    }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);


        modelBuilder.Entity<IdentityUsers>()
            .HasOne(user => user.Role)
            .WithMany(role => role.Users)
            .HasForeignKey(user => user.RoleId)
            .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<IdentityRole>().HasData(
            new IdentityRole { RoleId = "Admin", Name = "Administrator" },
            new IdentityRole { RoleId = "User", Name = "Regular User" }
        );

        modelBuilder.Entity<Product>().HasData(
          new Product { Id = 1, Name = "programmering", Image = "/images/Programmering.png" },
          new Product { Id = 2, Name = "barnomsorg", Image = "/images/Barnomsorg.jpg" },
          new Product { Id = 3, Name = "elkonstruktör", Image = "/images/Elkonstruktör.jpg" },
          new Product { Id = 4, Name = "pedagogik", Image = "/images/Pedagogik.jpg" },
          new Product { Id = 5, Name = "cad-Konstruktion", Image = "/images/CAD-konstruktion.jpg" },
          new Product { Id = 6, Name = "sjukvård", Image = "/images/sjukvård.png" }
      );
    }
    public DbSet<IdentityUsers> Users { get; set; }
    public DbSet<IdentityRole> Roles { get; set; }
    public DbSet<Product> Products { get; set; }
}