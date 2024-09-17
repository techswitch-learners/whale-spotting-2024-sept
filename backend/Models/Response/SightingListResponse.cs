using System.Runtime.InteropServices;
using WhaleSpotting.Models.Data;
using WhaleSpotting.Services;

namespace WhaleSpotting.Models.Response;

public class SightingListResponse()
{
    public List<SightingResponse> Sightings { get; set; }
    // private readonly IUserService _userService;

    public void SetList(List<Sighting> SightingsList)
    {
        Sightings = new List<SightingResponse>();

        foreach (var sighting in SightingsList)
        {
            // User = new User();
            // User.UserName = sighting.User.UserName;

            // Species = new Species();
            // Species.SpeciesName = sighting.Species.SpeciesName;

            // call user service get user by ID
            // user = userService.getbyId(sightings.userID)
            
            // User user = _userService.FindById(sighting.UserId.ToString()).Result;
            
            SightingResponse sightingResponse = new SightingResponse()
            {
                UserId = sighting.UserId,
                // Username = _userService.FindUsernameById(sighting.UserId.ToString()).Result,
                Username = sighting.User.UserName,
                SpeciesId = sighting.SpeciesId,
                // SpeciesName = Species.SpeciesName,
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
