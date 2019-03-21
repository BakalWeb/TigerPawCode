using Microsoft.EntityFrameworkCore;
using System;

namespace TigerPawCodeAPI.Models
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Blog> Blogs { get; set; }
        public DbSet<Subscriber> Subscribers { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<UserProfile> UserProfiles { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Blog>().HasData(
                new Blog
                {
                    Id = 1,
                    Headline = "Working with Angular",
                    ShortDescription = "Tips on working with Angular",
                    EstimatedReadingTime = 10,
                    DateCreated = DateTime.Now,
                    Promoted = false,
                    Status = BlogItemStatus.published,
                    Content = @"
    <p>Loads of content.</p>
    <p>And stuff.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat, ligula vitae viverra blandit,
    orci mauris vestibulum urna, in elementum urna felis posuere orci. Sed sed eros a purus euismod lacinia
     vitae sit amet nisi. Suspendisse potenti. Duis aliquam nec ipsum id commodo.
     Vivamus rutrum sem sit amet ligula interdum sagittis. In a tortor eros. In ac neque ante.
      Donec aliquet orci augue, vitae accumsan nulla ultrices id. Vivamus sagittis eu mi eget consequat.
      Integer commodo, sem vitae tristique convallis, felis nunc ornare augue, nec hendrerit
      tellus nibh sit amet augue. Phasellus erat elit, tempus ac suscipit non, luctus et ipsum. Etiam dictum,
       nibh eget elementum sollicitudin, libero justo cursus leo, sit amet fermentum dolor nisl eu est. Aenean
       elementum pretium justo vitae elementum. Aenean vel velit sem.
     Etiam hendrerit in est ut mattis.</p>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat, ligula vitae viverra blandit,
     orci mauris vestibulum urna, in elementum urna felis posuere orci. Sed sed eros a purus euismod lacinia
      vitae sit amet nisi. Suspendisse potenti. Duis aliquam nec ipsum id commodo.
      Vivamus rutrum sem sit amet ligula interdum sagittis. In a tortor eros. In ac neque ante.
       Donec aliquet orci augue, vitae accumsan nulla ultrices id. Vivamus sagittis eu mi eget consequat.
       Integer commodo, sem vitae tristique convallis, felis nunc ornare augue, nec hendrerit
       tellus nibh sit amet augue. Phasellus erat elit, tempus ac suscipit non, luctus et ipsum. Etiam dictum,
        nibh eget elementum sollicitudin, libero justo cursus leo, sit amet fermentum dolor nisl eu est. Aenean
        elementum pretium justo vitae elementum. Aenean vel velit sem.
      Etiam hendrerit in est ut mattis.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat, ligula vitae viverra blandit,
      orci mauris vestibulum urna, in elementum urna felis posuere orci. Sed sed eros a purus euismod lacinia
       vitae sit amet nisi. Suspendisse potenti. Duis aliquam nec ipsum id commodo.
       Vivamus rutrum sem sit amet ligula interdum sagittis. In a tortor eros. In ac neque ante.
        Donec aliquet orci augue, vitae accumsan nulla ultrices id. Vivamus sagittis eu mi eget consequat.
        Integer commodo, sem vitae tristique convallis, felis nunc ornare augue, nec hendrerit
        tellus nibh sit amet augue. Phasellus erat elit, tempus ac suscipit non, luctus et ipsum. Etiam dictum,
         nibh eget elementum sollicitudin, libero justo cursus leo, sit amet fermentum dolor nisl eu est. Aenean
         elementum pretium justo vitae elementum. Aenean vel velit sem.
       Etiam hendrerit in est ut mattis.</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat, ligula vitae viverra blandit,
       orci mauris vestibulum urna, in elementum urna felis posuere orci. Sed sed eros a purus euismod lacinia
        vitae sit amet nisi. Suspendisse potenti. Duis aliquam nec ipsum id commodo.
        Vivamus rutrum sem sit amet ligula interdum sagittis. In a tortor eros. In ac neque ante.
         Donec aliquet orci augue, vitae accumsan nulla ultrices id. Vivamus sagittis eu mi eget consequat.
         Integer commodo, sem vitae tristique convallis, felis nunc ornare augue, nec hendrerit
         tellus nibh sit amet augue. Phasellus erat elit, tempus ac suscipit non, luctus et ipsum. Etiam dictum,
          nibh eget elementum sollicitudin, libero justo cursus leo, sit amet fermentum dolor nisl eu est. Aenean
          elementum pretium justo vitae elementum. Aenean vel velit sem.
        Etiam hendrerit in est ut mattis.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat, ligula vitae viverra blandit,
        orci mauris vestibulum urna, in elementum urna felis posuere orci. Sed sed eros a purus euismod lacinia
         vitae sit amet nisi. Suspendisse potenti. Duis aliquam nec ipsum id commodo.
         Vivamus rutrum sem sit amet ligula interdum sagittis. In a tortor eros. In ac neque ante.
          Donec aliquet orci augue, vitae accumsan nulla ultrices id. Vivamus sagittis eu mi eget consequat.
          Integer commodo, sem vitae tristique convallis, felis nunc ornare augue, nec hendrerit
          tellus nibh sit amet augue. Phasellus erat elit, tempus ac suscipit non, luctus et ipsum. Etiam dictum,
           nibh eget elementum sollicitudin, libero justo cursus leo, sit amet fermentum dolor nisl eu est. Aenean
           elementum pretium justo vitae elementum. Aenean vel velit sem.
         Etiam hendrerit in est ut mattis.</p>
",
                    Thumbnail = "https = //www.fillmurray.com/g/140/100",
                    //Author = "Adam Bakal",
                    DateLive = DateTime.Now
                }
            );
        }
    }
}
