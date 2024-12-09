﻿namespace tuc_backend.Models
{
    public class IdentityUsers
    {
        public int Id { get; set; }
        public string RoleId { get; set; }
        public string Email { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public bool IsEmailConfirmed { get; set; }
        public string RefreshToken { get; set; }
        public DateTime RefreshTokenExpire { get; set; }
        public IdentityRole Role { get; set; }
        public DateTime RefreshTokenExpiry { get; internal set; }
    }
}