using System;
using System.ComponentModel.DataAnnotations;

namespace DB.Tables
{
    public class User : BaseEntity
    {
        [Required, StringLength(32)]
        public string Nickname { get; set; } = "";
        [Required, StringLength(32)]
        public string NormalizedNickname { get; set; } = "";
        [Required, EmailAddress]
        public string Email { get; set; } = "";
        [Required, EmailAddress]
        public string NormalizedEmail { get; set; } = "";
        [Required, StringLength(64)]
        public string PasswordHash { get; set; } = "";
        [Required]
        public bool IsLoggedOut { get; set; } = false;
        [Required]
        public Guid LogInStamp { get; set; } = Guid.Empty;
    }
}
