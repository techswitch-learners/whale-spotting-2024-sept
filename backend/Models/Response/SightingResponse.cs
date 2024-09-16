namespace WhaleSpotting.Models.Response;

public class SightingResponse
{
    public int Id { get; set; }
    public int UserId { get; set; }
    public int SpeciesId { get; set; }
    public float Latitude { get; set; }
    public float Longitude { get; set; }
    public string PhotoUrl { get; set; }
    public string? Description { get; set; }
    public DateTime DateTime { get; set; }
}
