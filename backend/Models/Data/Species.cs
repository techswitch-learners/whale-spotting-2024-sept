namespace WhaleSpotting.Models.Data;

public class Species
{
    public int SpeciesId { get; set; }
    public string SpeciesName { get; set; } = string.Empty;
    public string ExampleLink { get; set; } = string.Empty;
    public string TailPictureLink { get; set; } = string.Empty;
    public string WikiLink { get; set; } = string.Empty;
    public int TotalSightings { get; set; } = 0;

}