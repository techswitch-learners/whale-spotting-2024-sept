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

    [HttpDelete("{id}/delete")]
    public async Task<IActionResult> Delete([FromRoute] string id)
    {

        try
        {
            await _service.DeleteSighting(id);
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
