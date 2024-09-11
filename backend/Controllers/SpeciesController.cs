using Microsoft.AspNetCore.Mvc;
using WhaleSpotting.Models.Data;
using WhaleSpotting.Models.Request;
using WhaleSpotting.Models.Response;
using WhaleSpotting.Services;

namespace WhaleSpotting.Controllers;

[ApiController]
[Route("/species")]
public class SpeciesController : Controller
{
    private readonly ISpeciesServices _service;

    public SpeciesController(ISpeciesServices service)
    {
        _service = service;
    }

    [HttpGet("")]
    public IActionResult GetAllSpecies()
    {
        try
        {
            List<Species> listOfSpecies = _service.GetAllSpecies();
            return Ok(new SpeciesResponse { ListOfSpecies = listOfSpecies, Count = listOfSpecies.Count });
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }
}
