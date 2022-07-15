using Microsoft.EntityFrameworkCore;
using Paint_web_project.Models;

namespace Paint_web_project.Data

{
    public class Data_Class : DbContext
       
    {
       public Data_Class(DbContextOptions<Data_Class> options) : base(options)
        {

        }
        public DbSet<email> email
            { get; set; }
            }
}
