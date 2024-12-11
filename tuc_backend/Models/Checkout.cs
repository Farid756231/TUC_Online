using System.ComponentModel.DataAnnotations;

public class Checkout
{

    public int Id { get; set; }

    [Required]
    [StringLength(100, ErrorMessage = "Name must be less than 100 characters.")]
    public string Name { get; set; }

    [Required]
    public DateTime Date { get; set; } = DateTime.Now;
}
