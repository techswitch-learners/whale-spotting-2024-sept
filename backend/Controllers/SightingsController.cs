using Microsoft.AspNetCore.Mvc;

namespace WhaleSpotting.Controllers;

[ApiController]
[Route("/sightings")]
public class SightingsController : Controller
{
    [HttpPost("create")]
    public async Task<IActionResult> Create()
    {
        return Ok();
    }
}