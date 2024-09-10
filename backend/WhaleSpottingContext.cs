using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using WhaleSpotting.Enums;
using WhaleSpotting.Models.Data;

namespace WhaleSpotting;

public class WhaleSpottingContext(DbContextOptions<WhaleSpottingContext> options)
    : IdentityDbContext<User, Role, int>(options)
{
    public DbSet<Sighting> Sightings { get; set; }

    public DbSet<Species> Species { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);
        var userRole = new Role
        {
            Id = (int)RoleType.User,
            Name = RoleType.User.ToString(),
            NormalizedName = RoleType.User.ToString().ToUpper(),
        };
        var adminRole = new Role
        {
            Id = (int)RoleType.Admin,
            Name = RoleType.Admin.ToString(),
            NormalizedName = RoleType.Admin.ToString().ToUpper(),
        };
        builder.Entity<Role>().HasData(userRole, adminRole);

        builder.Entity<Species>(builder =>
        {
            builder.HasIndex(sp => sp.SpeciesName);

            builder.HasMany(e => e.Sightings).WithOne(e => e.Species).HasForeignKey(e => e.SpeciesId).IsRequired();
        });
    }
}
