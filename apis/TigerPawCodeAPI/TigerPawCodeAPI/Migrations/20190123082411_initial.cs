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
                    DateLive = table.Column<DateTime>(nullable: true),
                    DateDeleted = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Blogs", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Roles",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    RoleName = table.Column<string>(nullable: true),
                    Admin = table.Column<bool>(nullable: false),
                    RoleCreated = table.Column<DateTime>(nullable: false),
                    RoleDeleted = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Roles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Subscribers",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Email = table.Column<string>(nullable: true),
                    DateSubscribed = table.Column<DateTime>(nullable: false),
                    DateUnsubscribed = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Subscribers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    FirstName = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: true),
                    Username = table.Column<string>(nullable: true),
                    Password = table.Column<string>(nullable: true),
                    PasswordHash = table.Column<byte[]>(nullable: true),
                    PasswordSalt = table.Column<byte[]>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    Subscribed = table.Column<bool>(nullable: false),
                    RoleId = table.Column<int>(nullable: true),
                    DateCreated = table.Column<DateTime>(nullable: false),
                    LastModified = table.Column<DateTime>(nullable: false),
                    UserDeleted = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Users_Roles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "Roles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.InsertData(
                table: "Blogs",
                columns: new[] { "Id", "Author", "Content", "DateCreated", "DateDeleted", "DateLive", "EstimatedReadingTime", "Headline", "Promoted", "ShortDescription", "Status", "Thumbnail" },
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
", new DateTime(2019, 1, 23, 8, 24, 11, 634, DateTimeKind.Local), null, new DateTime(2019, 1, 23, 8, 24, 11, 640, DateTimeKind.Local), 10, "Working with Angular", false, "Tips on working with Angular", 1, "https = //www.fillmurray.com/g/140/100" });

            migrationBuilder.CreateIndex(
                name: "IX_Users_RoleId",
                table: "Users",
                column: "RoleId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Blogs");

            migrationBuilder.DropTable(
                name: "Subscribers");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "Roles");
        }
    }
}
