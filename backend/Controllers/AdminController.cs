using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using WhaleSpotting.Models.Data;
using WhaleSpotting.Models.Request;
using WhaleSpotting.Models.Response;
using WhaleSpotting.Services;

namespace WhaleSpotting.Controllers;

[ApiController]
[Route("/admin")]
public class AdminController(ISightingsService sightingsService) : Controller
{
    private readonly ISightingsService _sightingsService = sightingsService;

    // [HttpPut("approve/sighting={sightingId}")]
    // public async Task<IActionResult> Update(UpdateSightingsRequest sightingRequest, [FromRoute] int sightingId, int userId) {}
}