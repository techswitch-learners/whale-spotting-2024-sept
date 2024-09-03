using WhaleSpotting.Models.Data;

namespace WhaleSpotting.Data;

public static class SampleSightings
{
    public const int NumberOfSightings = 6;

    private static readonly IList<IList<string>> Data = new List<IList<string>>
    {
        new List<string>
        {
            "1",
            "1",
            "",
            "64.0123",
            "-74.0122",
            "PhotoURL",
            "Test Whale pic",
            "29Aug2024 16:40:00",
            "false"
        },
        new List<string> { "2", "Tigers", "1" },
        new List<string> { "3", "Swallows", "3" },
        new List<string> { "4", "Parrot", "3" },
        new List<string> { "5", "Cod", "5" },
        new List<string> { "6", "Snake", "6" }
    };

    // public static IEnumerable<Sighting> GetSightings()
    // {
    //     return Enumerable.Range(0, NumberOfSightings).Select(CreateRandomSighting);
    // }

    // private static Sighting CreateRandomSighting(int index)
    // {
    //     return new Sighting
    //     {
    //         Id = int.Parse(Data[index][0]),
    //         Name = Data[index][1],
    //         ClassificationId = int.Parse(Data[index][2])
    //     };
    // }
}
