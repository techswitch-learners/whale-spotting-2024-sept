using WhaleSpotting.Models.Data;
using WhaleSpotting.Models.Request;
using WhaleSpotting.Models.Response;

namespace WhaleSpotting.Services;

public interface ISpeciesService
{
    public SpeciesResponse GetAllSpecies();
}

public class SpeciesService : ISpeciesService
{
    private readonly WhaleSpottingContext _context;

    public SpeciesService(WhaleSpottingContext context)
    {
        _context = context;
    }

    public SpeciesResponse GetAllSpecies()
    {
        SpeciesResponse speciesResponse = new SpeciesResponse() { ListOfSpecies = _context.Species.ToList() };
        return speciesResponse;
    }
}
