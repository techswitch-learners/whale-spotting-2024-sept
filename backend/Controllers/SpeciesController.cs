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
    private readonly ISpeciesService _service;

    public SpeciesController(ISpeciesService service)
    {
        _service = service;
    }

    [HttpGet("")]
    public IActionResult GetAllSpecies()
    {
        try
        {
            SpeciesResponse speciesResponse = _service.GetAllSpecies();
            return Ok(speciesResponse);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }
}
