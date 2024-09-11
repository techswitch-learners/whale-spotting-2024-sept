using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WhaleSpotting.Migrations
{
    /// <inheritdoc />
    public partial class AddRelationOneToManySpeciesSightings : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(name: "WhaleSpeciesId", table: "Sightings", newName: "SpeciesId");

            migrationBuilder.CreateIndex(name: "IX_Sightings_SpeciesId", table: "Sightings", column: "SpeciesId");

            migrationBuilder.AddForeignKey(
                name: "FK_Sightings_Species_SpeciesId",
                table: "Sightings",
                column: "SpeciesId",
                principalTable: "Species",
                principalColumn: "SpeciesId",
                onDelete: ReferentialAction.Cascade
            );
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(name: "FK_Sightings_Species_SpeciesId", table: "Sightings");

            migrationBuilder.DropIndex(name: "IX_Sightings_SpeciesId", table: "Sightings");

            migrationBuilder.RenameColumn(name: "SpeciesId", table: "Sightings", newName: "WhaleSpeciesId");
        }
    }
}
