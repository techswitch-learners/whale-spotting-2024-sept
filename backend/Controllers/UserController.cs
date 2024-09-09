using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using WhaleSpotting.Models.Data;
using WhaleSpotting.Models.Request;
using WhaleSpotting.Models.Response;
using WhaleSpotting.Services;

namespace WhaleSpotting.Controllers;

[Authorize]
[ApiController]
[Route("/users")]
public class UserController(UserManager<User> userManager, IUserService userService) : Controller
{
    private readonly UserManager<User> _userManager = userManager;

    [HttpGet("{userName}")]
    public async Task<IActionResult> GetByUserName([FromRoute] string userName)
    {
        // TODO: WS 6 User Delete Endpoint  - implement user service GetByUserName on next line
        var matchingUser = await _userManager.FindByNameAsync(userName);
        if (matchingUser == null)
        {
            return NotFound();
        }
        return Ok(new UserResponse { Id = matchingUser.Id, UserName = matchingUser.UserName!, });
    }

    [HttpPost("/{userId}/update")]
    public async Task<IActionResult> UpdateUser([FromRoute] string userId, UpdateUserRequest userRequest)
    {
        // TODO WS 6 Users Delete Endpoint - implement user service GetByUserId on next line
        User? user = await _userManager.FindByIdAsync(userId);
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

        await userService.Update(user);

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
