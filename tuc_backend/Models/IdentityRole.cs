using System.ComponentModel.DataAnnotations;

namespace tuc_backend.Models;

public class IdentityRole
{
    [Key] public string RoleId { get; set; }
    public string Name { get; set; }
    public ICollection<IdentityUsers> Users { get; set; }
}