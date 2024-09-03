namespace WhaleSpotting.Models.Data;

public class Species
{
    public int SpeciesId { get; set; }

    //TO DO: Create index for species name
    public string SpeciesName { get; set; }
    public string ExampleLink { get; set; }
    public string TailPictureLink { get; set; }
    public string WikiLink { get; set; }
    public int TotalSightings { get; set; }

}