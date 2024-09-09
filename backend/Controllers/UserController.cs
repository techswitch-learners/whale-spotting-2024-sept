using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using WhaleSpotting.Models.Data;
using WhaleSpotting.Models.Response;

namespace WhaleSpotting.Controllers;

[ApiController]
[Route("/users")]
public class UserController(UserManager<User> userManager) : Controller
{
    private readonly UserManager<User> _userManager = userManager;

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

    public async Task<IActionResult> Delete([FromRoute] string id)
    {
        //id should be passed as a string
        var user = await _userManager.FindByIdAsync(id);
        if (user == null)
        {
            return NotFound();
        }
        else
        {
            var result = await _userManager.DeleteAsync(user);
            if (result.Succeeded)
            {
                //return RedirectToAction("ListUsers");
                return Ok();
            }
            else
            {
                foreach (var error in result.Errors)
                {
                    // return
                }
            }
        }
    }
}
