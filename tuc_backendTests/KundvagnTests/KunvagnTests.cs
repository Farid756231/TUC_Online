//using Microsoft.AspNetCore.Cors.Infrastructure;
//using Microsoft.EntityFrameworkCore;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;
//using tuc_backend.Data;

//namespace tuc_backendTests.KundvagnTests
//{
//    public class KunvagnTests
//    {

//        [Fact]
//        public void AddToCart_ShouldAddNewItem_WhenItemDoesNotExist()
//        {
//            // Arrange
//            var service = new CartService();
//            var item = new CartItem { ProductId = 1, ProductName = "Programmering", Quantity = 1 };

//            // Act
//            service.AddToCart(item);

//            // Assert
//            var cartItems = service.GetCartItems();
//            Assert.Single(cartItems);
//            Assert.Equal(1, cartItems.First().ProductId);
//        }

//        [Fact]
//        public void AddToCart_ShouldIncreaseQuantity_WhenItemAlreadyExists()
//        {
//            // Arrange
//            var service = new CartService();
//            var item = new CartItem { ProductId = 1, ProductName = "Programmering", Quantity = 1 };
//            service.AddToCart(item);

//            // Act
//            service.AddToCart(new CartItem { ProductId = 1, ProductName = "Programmering", Quantity = 2 });

//            // Assert
//            var cartItems = service.GetCartItems();
//            Assert.Single(cartItems);
//            Assert.Equal(3, cartItems.First().Quantity);
//        }


//        [Fact]
//        public void AddToCart_ShouldPersistData_InDatabase()
//        {
//            // Arrange
//            var options = new DbContextOptionsBuilder<DataContext>()
//                .UseInMemoryDatabase(databaseName: "TestDb")
//                .Options;

//            using var context = new DataContext(options);
//            var service = new CartService();

//            var item = new CartItem { ProductId = 1, ProductName = "Programmering", Quantity = 1 };

//            // Act
//            service.AddToCart(item);

//            // Assert
//            Assert.Equal(1, service.GetCartItems().Count());
//        }
//    }
//}
