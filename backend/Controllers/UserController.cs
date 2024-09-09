using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using WhaleSpotting.Models.Data;
using WhaleSpotting.Models.Response;
using WhaleSpotting.Services;

namespace WhaleSpotting.Controllers;

[ApiController]
[Route("/users")]
public class UserController : Controller
{
    private readonly UserManager<User> _userManager;
    private readonly IUserService _service;

    public UserController(UserManager<User> userManager, IUserService service)
    {
        _userManager = userManager;
        _service = service;
    }

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

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete([FromRoute] string id)
    {
        var user = await _userManager.FindByIdAsync(id);

        if (user == null)
        {
            return NotFound();
        }

        var result = await _userManager.DeleteAsync(user);

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
