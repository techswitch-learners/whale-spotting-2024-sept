using WhaleSpotting.Models.Data;

namespace WhaleSpotting.Services;

public interface IUserService
{
    public Task Update(User user);
}

public class UserService : IUserService
{
    private readonly WhaleSpottingContext _context;

    public UserService(WhaleSpottingContext context)
    {
        _context = context;
    }

    public async Task Update(User user)
    {
        _context.Users.Update(user);
        await _context.SaveChangesAsync();
    }
}
