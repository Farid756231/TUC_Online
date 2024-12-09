using System.ComponentModel.DataAnnotations;

namespace tuc_backend.DTOs
{
    public class Login
    {
        [Required] public string Email { get; set; }
        [Required] public string Password { get; set; }
    }
}