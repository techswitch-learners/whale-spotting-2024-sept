using Microsoft.EntityFrameworkCore;
using WhaleSpotting.Migrations;
using WhaleSpotting.Models.Data;

namespace WhaleSpotting.SeedData
{
    public class SeedAreaLocation
    {
        private readonly WhaleSpottingContext _context;

        public SeedAreaLocation(WhaleSpottingContext context)
        {
            _context = context;
        }

        private readonly IList<AreaLocation> DataAreaLocation = new List<AreaLocation>
        {
            new AreaLocation()
            {
                Id = 1,
                LocationName = "English Channel",
                Latitude = 48.764F,
                Longitude = -4.935F,
                Radius = 25.3f
            },
            new AreaLocation()
            {
                Id = 2,
                LocationName = "Indian Ocean",
                Latitude = -20.0F,
                Longitude = 80.0F,
                Radius = 1000.3f
            },
            new AreaLocation()
            {
                Id = 3,
                LocationName = "Pacific Ocean",
                Latitude = 0.0F,
                Longitude = 160.0F,
                Radius = 500.3f
            },
        };

        public void AreaLocationSeed()
        {
            if (!_context.AreaLocation.Any())
            {
                _context.AreaLocation.AddRange(DataAreaLocation);
                _context.SaveChanges();
            }
        }
    }
}
