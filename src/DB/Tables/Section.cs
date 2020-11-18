using System;
using System.ComponentModel.DataAnnotations;

namespace DB.Tables
{
    public class Section : BaseEntity
    {
        [Required]
        public Guid ArticleId { get; set; }
        public Article Article { get; set; }
        [Required, StringLength(32)]
        public string Title { get; set; } = "";
        [Required, StringLength(256)]
        public string Summary { get; set; } = "";
        [Required]
        public string Content { get; set; } = "";
    }
}
