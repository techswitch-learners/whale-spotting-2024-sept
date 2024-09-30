using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WhaleSpotting.Services;
using WhaleSpotting.Models.Data;
using WhaleSpotting.Models.Response;


namespace WhaleSpotting.Controllers;

[ApiController]
[Authorize(Roles = "Admin")]
[Route("/admin")]
public class AdminController(ISightingsService sightingsService, IUserService userService) : Controller
{
    private readonly ISightingsService _sightingsService = sightingsService;
     private readonly IUserService _userService = userService;

    [HttpPut("approve/sighting={sightingId}")]
    public async Task<IActionResult> ApproveSighting([FromRoute] int sightingId)
    {
        try
        {
            await _sightingsService.ApproveSighting(sightingId);
            return Ok();
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

            [HttpGet("user/username={username}")]
    public async Task<IActionResult> FindByName([FromRoute] string username){
        User? matchingUser = _userService.FindByName(username).Result;
        if (matchingUser == null)
        {
            return NotFound();
        }
        return Ok(new UserResponse { Id = matchingUser.Id, UserName = matchingUser.UserName});
    }

}
