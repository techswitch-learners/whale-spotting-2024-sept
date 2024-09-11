using WhaleSpotting.Models.Data;
using WhaleSpotting.Models.Request;

namespace WhaleSpotting.Services;

public interface ISpeciesServices
{
    public Task<List<Species>> GetAllSpecies();
}

public class SpeciesServices : ISpeciesServices
{
    private readonly WhaleSpottingContext _context;

    public SpeciesServices(WhaleSpottingContext context)
    {
        _context = context;
    }

    public async Task<List<Species>> GetAllSpecies()
    {
        return await _context.Species.ToList();
    }
}
