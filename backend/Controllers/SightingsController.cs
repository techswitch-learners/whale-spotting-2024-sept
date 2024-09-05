using Microsoft.AspNetCore.Mvc;
using WhaleSpotting.Models.Request;

namespace WhaleSpotting.Controllers;

[ApiController]
[Route("/sightings")]
public class SightingsController : Controller
{
    private readonly SightingService _service;

    public SightingsController(SightingService service)
    {
        _service = service;
    }

    [HttpPost("create")]
    public async Task<IActionResult> Create(SightingsRequest sightingRequest)
    {
        _service.CreateSighting(sightingRequest);
        return Ok();

        //send request to service
        //in frontend they use drop-down to let user insert whaleSpeciesId
        //SightingService method createSighting
        //SightingService saves the data then to the database > save is false until the sighting is approved
    }
}