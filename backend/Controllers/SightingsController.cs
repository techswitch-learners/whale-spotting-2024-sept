using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using WhaleSpotting.Models.Data;
using WhaleSpotting.Models.Request;
using WhaleSpotting.Models.Response;
using WhaleSpotting.Services;

namespace WhaleSpotting.Controllers;

[Authorize]
[ApiController]
[Route("/sightings")]
public class SightingsController : Controller
{
    private readonly ISightingsService _sightingService;

    public SightingsController(ISightingsService sightingService)
    {
        _sightingService = sightingService;
    }

    [HttpPost("create")]
    public async Task<IActionResult> Create(SightingsRequest sightingRequest)
    {
        try
        {
            await _sightingService.CreateSighting(sightingRequest);
            return Ok();
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpGet("")]
    public ActionResult<SightingListResponse> GetApproved()
    {
        try
        {
            SightingListResponse sightings = _sightingService.GetApproved();
            return Ok(sightings);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpDelete("{sightingId}/delete&user={userId}")]
    public async Task<IActionResult> Delete([FromRoute] int sightingId, int userId)
    {
        try
        {
            await _sightingService.DeleteSighting(sightingId, userId);
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

    [HttpPut("{sightingId}/update&user={userId}")]
    public async Task<IActionResult> Update(
        UpdateSightingsRequest sightingRequest,
        [FromRoute] int sightingId,
        int userId
    )
    {
        try
        {
            await _sightingService.UpdateSighting(sightingRequest, sightingId, userId);
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
