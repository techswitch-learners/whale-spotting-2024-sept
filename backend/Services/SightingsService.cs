using WhaleSpotting;
using WhaleSpotting.Models.Data;
using WhaleSpotting.Models.Request;

public class SightingService
{
    private readonly WhaleSpottingContext _context;

    public SightingService(WhaleSpottingContext context)
    {
        _context = context;
    }

    public void CreateSighting(SightingsRequest sightingsRequest)
    {

        Sighting sighting = new Sighting()
        {
            UserId = sightingsRequest.UserId,
            WhaleSpeciesId = sightingsRequest.WhaleSpeciesId,
            Latitude = sightingsRequest.Latitude,
            Longitude = sightingsRequest.Longitude,
            PhotoUrl = sightingsRequest.PhotoUrl,
            Description = sightingsRequest.Description,
            DateTime = sightingsRequest.DateTime,
            IsApproved = false
        };

        _context.Add(sighting);
        _context.SaveChanges();
    }
}