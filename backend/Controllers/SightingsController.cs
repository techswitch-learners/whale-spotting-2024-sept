using Microsoft.AspNetCore.Mvc;
using WhaleSpotting.Models.Data;
using WhaleSpotting.Models.Request;
using WhaleSpotting.Models.Response;
using WhaleSpotting.Services;

namespace WhaleSpotting.Controllers;

[ApiController]
[Route("/sightings")]
public class SightingsController : Controller
{
    private readonly ISightingsService _service;

    public SightingsController(ISightingsService service)
    {
        _service = service;
    }

    [HttpPost("create")]
    public async Task<IActionResult> Create(SightingsRequest sightingRequest)
    {
        try
        {
            await _service.CreateSighting(sightingRequest);
            return Ok();
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpDelete("sighting={sightingId}&user={userId}/delete")]
    public async Task<IActionResult> Delete([FromRoute] int sightingId, int userId)
    {
        try
        {
            await _service.DeleteSighting(sightingId, userId);
            return Ok();
        }
        catch (UnauthorizedAccessException ex)
        {
            return Unauthorized(ex.Message);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }

    }

    [HttpPut("sighting={sightingId}&user={userId}/update")]
    public async Task<IActionResult> Update(UpdateSightingsRequest sightingRequest, [FromRoute] int sightingId, int userId)
    {
        try
        {
            await _service.UpdateSighting(sightingRequest, sightingId, userId);
            return Ok();
        }
        catch (UnauthorizedAccessException ex)
        {
            return Unauthorized(ex.Message);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }

    }

}
