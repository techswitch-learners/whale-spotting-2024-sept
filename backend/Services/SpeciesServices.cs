using WhaleSpotting.Models.Data;
using WhaleSpotting.Models.Request;

namespace WhaleSpotting.Services;

public interface ISpeciesServices
{
    public List<Species> GetAllSpecies();
}

public class SpeciesServices : ISpeciesServices
{
    private readonly WhaleSpottingContext _context;

    public SpeciesServices(WhaleSpottingContext context)
    {
        _context = context;
    }

    public List<Species> GetAllSpecies()
    {
        return _context.Species.ToList();
    }
}
