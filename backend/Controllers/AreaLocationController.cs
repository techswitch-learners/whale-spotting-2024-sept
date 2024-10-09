using Microsoft.AspNetCore.Mvc;
using WhaleSpotting.Models.Data;
using WhaleSpotting.Models.Request;
using WhaleSpotting.Models.Response;
using WhaleSpotting.Services;

namespace WhaleSpotting.Controllers;

[ApiController]
[Route("/arealocation")]
public class AreaLocationController : Controller
{
    private readonly IAreaLocationService _service;

    public AreaLocationController(IAreaLocationService service)
    {
        _service = service;
    }

    [HttpGet("")]
    public IActionResult GetAllAreaLocation()
    {
        try
        {
            AreaLocationResponse areaLocationResponse = _service.GetAllAreaLocation();
            return Ok(areaLocationResponse);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }
}
