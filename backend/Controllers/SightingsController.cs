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
            int userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            SingleSightingResponse sighting = _sightingService.GetSingleSightingResponse(sightingId);
            if (
                sighting.UserId == userId
                || (sighting.UserId != userId && sighting.IsApproved)
                || User.IsInRole("Admin")
            )
            {
                return Ok(sighting);
            }
            else
            {
                return BadRequest("Data not available");
            }
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

    [HttpGet("approvedforuser")]
    public ActionResult<SightingListResponse> GetUserApproved()
    {
        try
        {
            int userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            SightingListResponse sightings = _sightingService.GetUserApproved(userId);
            return Ok(sightings);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpGet("unapprovedforuser")]
    public ActionResult<SightingListResponse> GetUserUnapproved()
    {
        try
        {
            int userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            SightingListResponse sightings = _sightingService.GetUserUnapproved(userId);
            return Ok(sightings);
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

    [Authorize(Roles = "Admin")]
    [HttpGet("unapproved")]
    public ActionResult<SightingListResponse> GetUnapproved()
    {
        try
        {
            SightingListResponse sightings = _sightingService.GetUnapproved();
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
