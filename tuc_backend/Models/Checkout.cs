using System.ComponentModel.DataAnnotations;

namespace tuc_backend.Models
{
    public class Checkout
    {
        
        public int Id { get; set; }


        [Required]
        [StringLength(100, ErrorMessage = "Name must be less than 100 characters.")]
        public string Name { get; set; }

        [Required]
        [EmailAddress(ErrorMessage = "Invalid Email Address.")]
        public string Email { get; set; }

        [Required]
        [StringLength(200, ErrorMessage = "Address must be less than 200 characters.")]
        public string Address { get; set; }

        [Required]
        [StringLength(16, MinimumLength = 13, ErrorMessage = "Card details must be between 13 and 16 digits.")]
        public string CardDetails { get; set; }

        [Required]
        public DateTime Date { get; set; } = DateTime.Now;

        public string SessionId { get; set; }
        public string IpAddress { get; set; }

        public bool PaymentStatus { get; set; } = false;
    }
}
