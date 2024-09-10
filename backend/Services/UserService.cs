using Microsoft.AspNetCore.Identity;
using WhaleSpotting.Models.Data;

namespace WhaleSpotting.Services;

public interface IUserService
{
    public Task<User> FindByName(string userName);
    public Task<User> FindById(string userId);
    public Task Update(User user);
    public Task<IdentityResult> Delete(User user);
}

public class UserService : IUserService
{
    private readonly UserManager<User> _userManager;

    public UserService(UserManager<User> userManager)
    {
        _userManager = userManager;
    }

    public async Task<User> FindByName(string userName)
    {
        return await _userManager.FindByNameAsync(userName);
    }

    public async Task<User> FindById(string userId)
    {
        return await _userManager.FindByIdAsync(userId);
    }

    public async Task Update(User user)
    {
        await _userManager.UpdateAsync(user);
    }

    public async Task<IdentityResult> Delete(User user)
    {
        return await _userManager.DeleteAsync(user);
    }
}
