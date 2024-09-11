using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WhaleSpotting.Migrations
{
    /// <inheritdoc />
    public partial class AddingForeignKeyToSightings : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(name: "IX_Sightings_UserId", table: "Sightings", column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Sightings_AspNetUsers_UserId",
                table: "Sightings",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade
            );
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(name: "FK_Sightings_AspNetUsers_UserId", table: "Sightings");

            migrationBuilder.DropIndex(name: "IX_Sightings_UserId", table: "Sightings");
        }
    }
}
