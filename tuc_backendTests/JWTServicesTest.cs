using Moq;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using Xunit;
using tuc_backend.Models;
using tuc_backend.Services.Jwt;
using tuc_backend.Services.Users;
using System.Data;
using dotenv.net;
using System.Security.Claims;

namespace tuc_backendTests
{
    public class JWTServicesTest
    {
        private readonly Mock<IJWTServices> _jwtServicesMock;
        private readonly Mock<IUserServices> _userServicesMock;
        private readonly IdentityUsers _identityUsers;

        public JWTServicesTest()
        {

            DotEnv.Load();

            _jwtServicesMock = new Mock<IJWTServices>();
            _userServicesMock = new Mock<IUserServices>();

            _identityUsers = new IdentityUsers
            {
                Email = "test@test.com",
                Id = 1,
                UserName = "testUser",
                Role = new IdentityRole { RoleId = "Admin" }
            };
        }

        [Fact]
        public void JWTServices_GenerateJWTToken_ReturnAValidJwtToken()
        {

            var generatedToken = "Mocked-jwt-token";

            _jwtServicesMock.Setup(services => services.GenerateToken(It.IsAny<IdentityUsers>()))
                            .Returns(generatedToken);
            _jwtServicesMock.Setup(services => services.ValidateToken(It.IsAny<string>()))
                            .Returns(true);

            string token = _jwtServicesMock.Object.GenerateToken(_identityUsers);

            Assert.True(_jwtServicesMock.Object.ValidateToken(token));
            Assert.Equal(generatedToken, token);
        }

        [Fact]
        public void JWTServices_ValidateJWTToken_ReturnValidJwtToken()
        {

            _userServicesMock.Setup(service => service.GetByEmail(It.IsAny<string>()))
                .Returns(_identityUsers);

            IJWTServices jwtServices = new JwtServices(_userServicesMock.Object);

            string token = jwtServices.GenerateToken(_identityUsers);
            bool validateToken = jwtServices.ValidateToken(token);

            var tokenHandler = new JwtSecurityTokenHandler();
            var jwtToken = tokenHandler.ReadJwtToken(token);


            Assert.True(validateToken, "Token should be valid");

            var emailClaim = jwtToken?.Claims.FirstOrDefault(claim => claim.Type == ClaimTypes.Email)?.Value;
            Assert.Equal("test@test.com", emailClaim);

            var roleClaim = jwtToken?.Claims.FirstOrDefault(claim => claim.Type == ClaimTypes.Role)?.Value;
            Assert.Equal("Admin", roleClaim);
        }
    }
}