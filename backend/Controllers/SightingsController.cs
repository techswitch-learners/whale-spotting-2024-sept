using System.Security.Claims;
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

    [HttpGet("{sightingId}")]
    public IActionResult GetBySightingId([FromRoute] int sightingId)
    {
        try
        {
            var sightingResult = _sightingService.GetSightingById(sightingId);
            Sighting sighting = sightingResult.Result;
            return Ok(sighting);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpPost("create")]
    public async Task<IActionResult> Create(SightingsRequest sightingRequest)
    {
        try
        {
            int userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            await _sightingService.CreateSighting(sightingRequest, userId);
            return Ok();
        }
        catch (NullReferenceException ex)
        {
            return BadRequest($"User identifier not found. {ex.Message}");
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

    [HttpDelete("{sightingId}/delete")]
    public async Task<IActionResult> Delete([FromRoute] int sightingId)
    {
        try
        {
            int userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            await _sightingService.DeleteSighting(sightingId, userId);
            return Ok();
        }
        catch (NullReferenceException ex)
        {
            return BadRequest($"User identifier not found. {ex.Message}");
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

    [HttpPut("{sightingId}/update")]
    public async Task<IActionResult> Update(SightingsRequest sightingRequest, [FromRoute] int sightingId)
    {
        try
        {
            int userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            await _sightingService.UpdateSighting(sightingRequest, sightingId, userId);
            return Ok();
        }
        catch (NullReferenceException ex)
        {
            return BadRequest($"User identifier not found. {ex.Message}");
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
