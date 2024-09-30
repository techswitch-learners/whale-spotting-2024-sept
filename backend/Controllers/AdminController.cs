using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WhaleSpotting.Models.Data;
using WhaleSpotting.Services;

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

    [HttpDelete("users/delete/{username}")]
    public async Task<IActionResult> DeleteUser([FromRoute] string username)
    {
        try
        {
            User user = await _userService.FindByName(username);
            if (user is null) {
                return BadRequest("User does not exist");
            }

            await _userService.Delete(user);
            return NoContent();
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }
}
