using Microsoft.AspNetCore.Identity;
using WhaleSpotting.Models.Data;

namespace WhaleSpotting.Services;

public interface IUserService
{
    public Task Update(User user);
}

public class UserService : IUserService
{
    private readonly UserManager<User> _userManager;

    public UserService(UserManager<User> userManager)
    {
        _userManager = userManager;
    }

    public async Task Update(User user)
    {
        await _userManager.UpdateAsync(user);
    }
}
