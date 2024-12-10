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

     
    }
    public DbSet<IdentityUsers> Users { get; set; }
    public DbSet<IdentityRole> Roles { get; set; }
   
}