using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace TigerPawCodeAPI.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Blogs",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Headline = table.Column<string>(nullable: true),
                    ShortDescription = table.Column<string>(nullable: true),
                    EstimatedReadingTime = table.Column<int>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: false),
                    Status = table.Column<int>(nullable: false),
                    Promoted = table.Column<bool>(nullable: false),
                    Content = table.Column<string>(nullable: true),
                    Thumbnail = table.Column<string>(nullable: true),
                    Author = table.Column<string>(nullable: true),
                    DateLive = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Blogs", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Blogs",
                columns: new[] { "Id", "Author", "Content", "DateCreated", "DateLive", "EstimatedReadingTime", "Headline", "Promoted", "ShortDescription", "Status", "Thumbnail" },
                values: new object[] { 1, "Adam Bakal", @"
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
", new DateTime(2018, 12, 27, 8, 5, 39, 426, DateTimeKind.Local), new DateTime(2018, 12, 27, 8, 5, 39, 429, DateTimeKind.Local), 10, "Working with Angular", false, "Tips on working with Angular", 1, "https = //www.fillmurray.com/g/140/100" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Blogs");
        }
    }
}
