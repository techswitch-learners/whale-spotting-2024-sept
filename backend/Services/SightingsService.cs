using WhaleSpotting.Models.Data;
using WhaleSpotting.Models.Request;

namespace WhaleSpotting.Services;

public interface ISightingsService
{
    public Task CreateSighting(SightingsRequest sightingsRequest);
    public Task DeleteSighting(string id);
    
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
            SpeciesId = sightingsRequest.SpeciesId,
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

    public async Task DeleteSighting(string id)
    {

        // check if sighting exists
        // if not, throw exception
        // check if user id of the sighting matches with user id in identity
        // if not, throw exception
        // try to delete the record from database and save changes
        // catch exceptions if deletion failed
    }
}