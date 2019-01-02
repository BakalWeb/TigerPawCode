using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace TigerPawCodeAPI.Migrations
{
    public partial class SubscriberTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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

            migrationBuilder.UpdateData(
                table: "Blogs",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "DateCreated", "DateLive" },
                values: new object[] { new DateTime(2019, 1, 2, 11, 27, 16, 392, DateTimeKind.Local), new DateTime(2019, 1, 2, 11, 27, 16, 395, DateTimeKind.Local) });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Subscribers");

            migrationBuilder.UpdateData(
                table: "Blogs",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "DateCreated", "DateLive" },
                values: new object[] { new DateTime(2019, 1, 2, 8, 39, 1, 829, DateTimeKind.Local), new DateTime(2019, 1, 2, 8, 39, 1, 831, DateTimeKind.Local) });
        }
    }
}
