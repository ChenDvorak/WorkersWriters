using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace DB.Tables
{
    public class Article : BaseEntity
    {
        [Required]
        public Guid AuthorId { get; set; }
        public User Author { get; set; }
        [StringLength(64), Required]
        public string Title { get; set; } = "";
        [StringLength(256), Required]
        public string Summary { get; set; } = "";
        public List<Section> Sections { get; set; }
    }
}
