using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WhaleSpotting.Migrations
{
    /// <inheritdoc />
    public partial class AddCustomPropertiesToUserTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(name: "AboutMe", table: "AspNetUsers", type: "text", nullable: true);

            migrationBuilder.AddColumn<string>(name: "FirstName", table: "AspNetUsers", type: "text", nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsSuspended",
                table: "AspNetUsers",
                type: "boolean",
                nullable: false,
                defaultValue: false
            );

            migrationBuilder.AddColumn<string>(name: "LastName", table: "AspNetUsers", type: "text", nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "TotalPointsEarned",
                table: "AspNetUsers",
                type: "integer",
                nullable: false,
                defaultValue: 0
            );
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(name: "AboutMe", table: "AspNetUsers");

            migrationBuilder.DropColumn(name: "FirstName", table: "AspNetUsers");

            migrationBuilder.DropColumn(name: "IsSuspended", table: "AspNetUsers");

            migrationBuilder.DropColumn(name: "LastName", table: "AspNetUsers");

            migrationBuilder.DropColumn(name: "TotalPointsEarned", table: "AspNetUsers");
        }
    }
}
