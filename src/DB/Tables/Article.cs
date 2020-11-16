using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace DB.Tables
{
    public class Article : BaseEntity
    {
        [StringLength(64), Required]
        public string Title { get; set; } = "";
        [StringLength(256), Required]
        public string Summary { get; set; } = "";
    }
}
