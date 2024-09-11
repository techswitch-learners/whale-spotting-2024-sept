using Microsoft.EntityFrameworkCore;
using WhaleSpotting.Models.Data;
using WhaleSpotting.Models.Request;
using WhaleSpotting.Models.Response;

namespace WhaleSpotting.Services;

public interface ISightingsService
{
    public Task CreateSighting(SightingsRequest sightingsRequest);
    public SightingListResponse GetApproved();
    public Task<Sighting> GetSightingById(int sightingId);
    public Task DeleteSighting(int sightingId, int userId);
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

    public SightingListResponse GetApproved()
    {
        List<Sighting> sightings = _context.Sightings.Where(s => s.IsApproved).ToList();
        SightingListResponse sightingListResponse = new SightingListResponse();
        sightingListResponse.SetList(sightings);
        return sightingListResponse;
    }

    public async Task<Sighting> GetSightingById(int sightingId)
    {
        try
        {
            Sighting sighting = _context.Sightings.Single(sighting => sighting.Id == sightingId);
            return sighting;
        }
        catch
        {
            throw new InvalidOperationException($"Sighting with ID {sightingId} not found");
        }
    }

    public async Task DeleteSighting(int sightingId, int userId)
    {
        Sighting sighting = await GetSightingById(sightingId);

        if (sighting.UserId != userId)
        {
            throw new UnauthorizedAccessException(
                $"User ID {userId} is not authorised to delete sighting {sightingId}"
            );
        }

        try
        {
            _context.Sightings.Remove(sighting);
            _context.SaveChanges();
        }
        catch
        {
            throw new InvalidOperationException($"Sighting with ID {sightingId} cannot be deleted");
        }
    }
}
