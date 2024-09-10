using Microsoft.AspNetCore.Http.HttpResults;

namespace WhaleSpotting.Models.Request;

public class SightingsRequest
{
    public int UserId { get; set; }
    public int WhaleSpeciesId { get; set; }
    public float Latitude { get; set; }
    public float Longitude { get; set; }
    public string PhotoUrl { get; set; }
    public string? Description { get; set; }
    public DateTime DateTime { get; set; }
}
