using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace TigerPawCodeAPI.Migrations
{
    public partial class BlogItemDateDeleted : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "DateDeleted",
                table: "Blogs",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "Blogs",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "DateCreated", "DateLive" },
                values: new object[] { new DateTime(2019, 1, 2, 8, 39, 1, 829, DateTimeKind.Local), new DateTime(2019, 1, 2, 8, 39, 1, 831, DateTimeKind.Local) });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DateDeleted",
                table: "Blogs");

            migrationBuilder.UpdateData(
                table: "Blogs",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "DateCreated", "DateLive" },
                values: new object[] { new DateTime(2018, 12, 27, 8, 5, 39, 426, DateTimeKind.Local), new DateTime(2018, 12, 27, 8, 5, 39, 429, DateTimeKind.Local) });
        }
    }
}
