using System.Runtime.InteropServices;
using WhaleSpotting.Models.Data;
using WhaleSpotting.Services;

namespace WhaleSpotting.Models.Response;

public class SightingListResponse()
{
    public List<SightingResponse> Sightings { get; set; }

    public void SetList(List<Sighting> SightingsList)
    {
        Sightings = new List<SightingResponse>();

        foreach (var sighting in SightingsList)
        {
            SightingResponse sightingResponse = new SightingResponse()
            {
                Id = sighting.Id,
                UserId = sighting.UserId,
                Username = sighting.User.UserName,
                SpeciesId = sighting.SpeciesId,
                SpeciesName = sighting.Species.SpeciesName,
                Latitude = sighting.Latitude,
                Longitude = sighting.Longitude,
                PhotoUrl = sighting.PhotoUrl,
                Description = sighting.Description,
                DateTime = sighting.DateTime
            };

            Sightings.Add(sightingResponse);
        }
    }
}
