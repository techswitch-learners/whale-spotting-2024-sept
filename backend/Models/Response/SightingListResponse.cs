using System.Runtime.InteropServices;
using WhaleSpotting.Models.Data;

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
                UserId = sighting.UserId,
                WhaleSpeciesId = sighting.WhaleSpeciesId,
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
