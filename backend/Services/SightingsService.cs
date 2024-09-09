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
        int sightingId = Convert.ToInt32(id);

        Sighting sighting = _context.Sightings.FirstOrDefault(sighting => sighting.Id == sightingId);
        
        if (sighting == null) {
            throw new Exception();
        }

        if (sighting.UserId !== Identity user) {
            throw new UnauthorizedAccessException("");
        }
        // check if user id of the sighting matches with user id in identity
        // if not, throw exception
        // try to delete the record from database and save changes
        // catch exceptions if deletion failed
    }
}