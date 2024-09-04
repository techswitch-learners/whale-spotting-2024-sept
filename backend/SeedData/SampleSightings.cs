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
            "64.0123",
            "-74.0122",
            "https://media.istockphoto.com/id/1436921059/photo/closeup-shot-of-a-humpback-whale-under-the-sea.jpg?s=2048x2048&w=is&k=20&c=vl4PFMO_hcVjZZeIq4MxGosri9aUll1nMAbndOxhm8E=",
            "Saw this humback whale whilst out sailing",
            "29Aug2024 16:40:00",
            "false"
        },
        new List<string>  {"2","1","54.012354","-94.012267","https://media.istockphoto.com/id/1299555061/photo/close-up-of-humpback-whale-breaching-and-surface-activity.jpg?s=2048x2048&w=is&k=20&c=9ielo4BxhF6DCYi2BQXhIbP-obrHhiCU1Pla4mS_mhM=","Very sad to see this whale suffering","29Aug2023 16:40:00","false"  },
        new List<string>  {"2","1","4.012354","44.012267","https://images.unsplash.com/photo-1531739419660-bd4a79e4deca?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","Another pic","29Aug2023 16:40:00","false"  },
        new List<string>  {"2","1","54.012354","-94.012267","https://images.unsplash.com/photo-1520646924857-261be3037bc7?q=80&w=3069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","Test Whale pic","29Sep2023 16:40:00","false"  },
        new List<string>  {"2","1","54.012354","-94.012267","https://images.unsplash.com/photo-1723246619553-fd5685fb559f?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","Test Whale pic","29May2023 15:30:00","false"  },
        new List<string>  {"2","1","54.012354","-94.012267","https://images.unsplash.com/photo-1570913179118-f3d24be1d1f7?q=80&w=3943&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","Test Whale pic","29Mar2023 13:42:00","true"  },
    };

    public static IEnumerable<Sighting> GetSightings()
    {
        return Enumerable.Range(0, NumberOfSightings).Select(CreateRandomSighting);
    }

    private static Sighting CreateRandomSighting(int index)
    {
        return new Sighting
        {
            UserId = int.Parse(Data[index][0]),
            WhaleSpeciesId = int.Parse(Data[index][1]),
            Lattitude = float.Parse(Data[index][2]),
            Longitude = float.Parse(Data[index][3]),
            PhotoUrl= Data[index][4];
            Description = Data[index[5]];
            DateTime = DateTime.Parse(Data[index[6]]);
            IsApproved = Boolean.Parse(Data[index][7])
        };
    }
}
