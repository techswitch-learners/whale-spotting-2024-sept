using Microsoft.AspNetCore.Mvc;
using WhaleSpotting.Models.Request;

namespace WhaleSpotting.Controllers;

[ApiController]
[Route("/sightings")]
public class SightingsController : Controller
{
    private readonly SightingsService _service;

    public SightingsController(SightingsService service)
    {
        _service = service;
    }

    [HttpPost("create")]
    public async Task<IActionResult> Create(SightingsRequest sightingRequest)
    {
        _service.CreateSighting(sightingRequest);
        return Ok();

        //implement different responses
    }
}