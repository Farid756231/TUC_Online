using Moq;
using System;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using tuc_backend.Controllers;
using tuc_backend.DTOs;
using tuc_backend.Models;
using tuc_backend.Services.Jwt;
using tuc_backend.Services.Security;
using tuc_backend.Services.Users;
using Xunit;

namespace tuc_backend.Tests
{
    public class AuthControllerTests
    {
        private readonly Mock<IJWTServices> _mockJwtServices;
        private readonly Mock<IUserServices> _mockUserService;
        private readonly Mock<PasswordManager> _mockPasswordManager;
        private readonly AuthController _controller;

        public AuthControllerTests()
        {
            _mockJwtServices = new Mock<IJWTServices>();
            _mockUserService = new Mock<IUserServices>();
            _mockPasswordManager = new Mock<PasswordManager>();
            _controller = new AuthController(_mockJwtServices.Object, _mockUserService.Object, _mockPasswordManager.Object);
        }

        [Fact]
        public void Login_ReturnsBadRequest_WhenInvalidCredentials()
        {
            // Arrange
            var loginDto = new Login { Email = "test@example.com", Password = "wrongpassword" };
            _mockUserService.Setup(s => s.GetByEmail(It.IsAny<string>())).Returns((IdentityUsers)null);  // Simulate user not found

            // Act
            var result = _controller.Login(loginDto);

            // Assert
            var badRequestResult = Assert.IsType<BadRequestObjectResult>(result);
            Assert.Equal("Invalid credentials.", badRequestResult.Value);
        }

        [Fact]
        public void Register_ReturnsBadRequest_WhenPasswordsDoNotMatch()
        {
            // Arrange
            var registerDto = new Register { Email = "newuser@example.com", Password = "password1", ConfirmPassword = "password2" };

            // Act
            var result = _controller.Register(registerDto);

            // Assert
            var badRequestResult = Assert.IsType<BadRequestObjectResult>(result);
            Assert.Equal("Passwords do not match.", badRequestResult.Value);
        }

        [Fact]
        public void Logout_ReturnsOk_WhenSuccessfullyLoggedOut()
        {
            // Arrange
            var context = new DefaultHttpContext();
            _controller.ControllerContext = new ControllerContext
            {
                HttpContext = context
            };

            // Act
            var result = _controller.Logout();

            // Assert
            var okResult = Assert.IsType<OkObjectResult>(result);
            var returnValue = Assert.IsType<LogoutResponse>(okResult.Value);


            Assert.Equal("Successfully logged out.", returnValue.Message);

            Assert.Null(context.Request.Cookies["token"]);
            Assert.Null(context.Request.Cookies["refreshToken"]);
        }
    }
}