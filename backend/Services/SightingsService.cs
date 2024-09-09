using WhaleSpotting.Models.Data;
using WhaleSpotting.Models.Request;

namespace WhaleSpotting.Services;

public interface ISightingsService
{
    public Task CreateSighting(SightingsRequest sightingsRequest);
}

public class SightingsService : ISightingsService
{
    private readonly WhaleSpottingContext _context;

    public SightingsService(WhaleSpottingContext context)
    {
        _context = context;
    }

    public async Task CreateSighting(SightingsRequest sightingsRequest)
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

        await _context.AddAsync(sighting);
        await _context.SaveChangesAsync();
    }
}