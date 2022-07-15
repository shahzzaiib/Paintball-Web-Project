using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;
using Paint_web_project.Models;
namespace Paint_web_project.Models



{
    public class email
    {
        [Key]
        public string Email { get; set; }
    }
}
