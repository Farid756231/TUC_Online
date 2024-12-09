using System.ComponentModel.DataAnnotations;

namespace tuc_backend.DTOs
{
    public class Register
    {
        //public string Username { get; set; }
        [Required][EmailAddress] public string Email { get; set; }
        [Required][MinLength(6)] public string Password { get; set; }
        [Required][MinLength(6)] public string ConfirmPassword { get; set; }
        public bool PasswordsMatch => Password == ConfirmPassword;
    }
}