using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using WhaleSpotting.Models.Data;
using WhaleSpotting.Models.Request;
using WhaleSpotting.Models.Response;

namespace WhaleSpotting.Controllers;

[ApiController]
[Route("/users")]
public class UserController(UserManager<User> userManager, WhaleSpottingContext context) : Controller
{
    private readonly UserManager<User> _userManager = userManager;
    private readonly WhaleSpottingContext _context = context;

    [HttpGet("{userName}")]
    public async Task<IActionResult> GetByUserName([FromRoute] string userName)
    {
        var matchingUser = await _userManager.FindByNameAsync(userName);
        if (matchingUser == null)
        {
            return NotFound();
        }
        return Ok(new UserResponse { Id = matchingUser.Id, UserName = matchingUser.UserName!, });
    }

    [HttpGet("GetUserId/{userId}")]
    public async Task<User?> GetByUserId([FromRoute] string userId)
    {
        var matchingUser = await _userManager.FindByIdAsync(userId);
        if (matchingUser == null)
        {
            return null;
        }
        return matchingUser;
    }

    [HttpPost("UpdateUser")]
    public async Task<IActionResult> UpdateUser(UpdateUserRequest userRequest)
    {
        User? user = await GetByUserId(userRequest.Id.ToString());
        var errorResponse = new ErrorResponse();
        var generalErrors = new List<string>();

        if (user == null)
        {
            return NotFound();
        }

        if (user.IsSuspended)
        {
            errorResponse.Errors["User is suspended"] = generalErrors;
            return BadRequest(errorResponse);
        }

        if (userRequest.FirstName != null)
        {
            user.FirstName = userRequest.FirstName;
        }
        if (userRequest.LastName != null)
        {
            user.LastName = userRequest.LastName;
        }
        if (userRequest.AboutMe != null)
        {
            user.AboutMe = userRequest.AboutMe;
        }

        _context.Users.Update(user);
        await _context.SaveChangesAsync();
        return Ok(
            new UpdateUserResponse
            {
                Id = user.Id,
                FirstName = user.FirstName,
                LastName = user.LastName,
                AboutMe = user.AboutMe
            }
        );
    }
}
