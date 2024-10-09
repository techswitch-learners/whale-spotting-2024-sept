using WhaleSpotting.Models.Data;
using WhaleSpotting.Models.Request;
using WhaleSpotting.Models.Response;

namespace WhaleSpotting.Services;

public interface IAreaLocationService
{
    public AreaLocationResponse GetAllAreaLocation();
}

public class AreaLocationService : IAreaLocationService
{
    private readonly WhaleSpottingContext _context;

    public AreaLocationService(WhaleSpottingContext context)
    {
        _context = context;
    }

    public AreaLocationResponse GetAllAreaLocation()
    {
        AreaLocationResponse areaLocationResponse = new AreaLocationResponse()
        {
            ListOfAreaLocation = _context.AreaLocation.ToList()
        };
        return areaLocationResponse;
    }
}
