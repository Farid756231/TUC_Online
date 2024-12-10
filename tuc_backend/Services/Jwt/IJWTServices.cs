using tuc_backend.Models;

namespace tuc_backend.Services.Jwt;

public interface IJWTServices
{
    string GenerateToken(IdentityUsers identityUsers);
    bool ValidateToken(string token);
    string RefreshToken();
}