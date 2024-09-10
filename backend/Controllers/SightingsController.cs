using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
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

    [HttpGet("")]
    public ActionResult<List<SightingResponse>> GetAll()
    {
        List<Sighting> sightings = _service.GetAll();

        List<SightingResponse> sightingList = new List<SightingResponse>();

        foreach (var sighting in sightings)
        {
            SightingResponse sightingResponse = new SightingResponse()
            {
                UserId = sighting.UserId,
                WhaleSpeciesId = sighting.WhaleSpeciesId,
                Latitude = sighting.Latitude,
                Longitude = sighting.Longitude,
                PhotoUrl = sighting.PhotoUrl,
                Description = sighting.Description,
                DateTime = sighting.DateTime
            };
            sightingList.Add(sightingResponse);
        }
        return Ok(sightingList);
    }
}
