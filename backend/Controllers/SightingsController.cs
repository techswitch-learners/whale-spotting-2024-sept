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
            var singlesighting = _sightingService.GetSightingById(sightingId);
            SingleSightingResponse sighting = new SingleSightingResponse()
            {
                Id = singlesighting.Result.Id,
                UserId = singlesighting.Result.UserId,
                SpeciesId = singlesighting.Result.SpeciesId,
                Latitude = singlesighting.Result.Latitude,
                Longitude = singlesighting.Result.Longitude,
                PhotoUrl = singlesighting.Result.PhotoUrl,
                Description = singlesighting.Result.Description,
                DateTime = singlesighting.Result.DateTime,
                IsApproved = singlesighting.Result.IsApproved,
            };
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
