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
public class UserController(IUserService userService) : Controller
{
    private readonly IUserService _userService = userService;

    [HttpGet("{userName}")]
    public IActionResult GetByUserName([FromRoute] string userName)
    {
        User? matchingUser = _userService.FindByName(userName).Result;
        if (matchingUser == null)
        {
            return NotFound();
        }
        return Ok(new UserResponse { Id = matchingUser.Id, UserName = matchingUser.UserName, });
    }

    [HttpPost("/{userId}/update")]
    public async Task<IActionResult> UpdateUser([FromRoute] string userId, UpdateUserRequest userRequest)
    {
        User? user = _userService.FindById(userId).Result;
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

        await _userService.Update(user);

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

    [HttpDelete("{userId}")]
    public async Task<IActionResult> Delete([FromRoute] string userId)
    {
        User? user = _userService.FindById(userId).Result;

        if (user == null)
        {
            return NotFound();
        }

        IdentityResult result = _userService.Delete(user).Result;

        if (!result.Succeeded)
        {
            var errorResponse = new ErrorResponse();
            var generalErrors = new List<string>();
            foreach (var error in result.Errors)
            {
                generalErrors.Add(error.Description);
            }
            errorResponse.Errors["General"] = generalErrors;
            return BadRequest(errorResponse);
        }

        return Ok();
    }
}
