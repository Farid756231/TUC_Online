using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using tuc_backend.Controllers;
using tuc_backend.Data;
using tuc_backend.Models;

namespace tuc_backendTests
{
    public class ProductsTests
    {

        [Fact]
        public void Product_Should_Have_Correct_Properties()
        {
            // Arrange
            var product = new Product { Id = 1, Name = "Test Product", Image = "test.jpg" };

            // Assert
            Assert.Equal(1, product.Id);
            Assert.Equal("Test Product", product.Name);
            Assert.Equal("test.jpg", product.Image);
        }


        [Fact]
        public void CanApplyMigrations()
        {
            var options = new DbContextOptionsBuilder<DataContext>()
                .UseInMemoryDatabase("TestDb")
                .Options;

            using var context = new DataContext(options);
            context.Database.EnsureCreated();

            Assert.True(context.Products.Any());
        }

        [Fact]
        public async Task PostProduct_AddsNewProduct()
        {
            // Arrange
            var context = GetInMemoryContext();
            var controller = new ProductsController(context);
            var newProduct = new Product { Id = 3, Name = "elkonstruktör", Image = "/images/Elkonstruktör.jpg" };

            // Act
            var result = await controller.PostProduct(newProduct) as CreatedAtActionResult;

            // Assert
            Assert.NotNull(result);
            var product = context.Products.Find(3);
            Assert.Equal("elkonstruktör", product.Name);
        }

        private DataContext GetInMemoryContext()
        {
            var options = new DbContextOptionsBuilder<DataContext>()
                .UseInMemoryDatabase(databaseName: "TestDatabase")
                .Options;

            var context = new DataContext(options);

            // Seed data
            context.Products.Add(new Product { Id = 1, Name = "programmering", Image = "/images/Programmering.png" });
            context.Products.Add(new Product { Id = 2, Name = "barnomsorg", Image = "/images/Barnomsorg.jpg" });
            context.SaveChanges();

            return context;
        }



    }
}
