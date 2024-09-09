using WhaleSpotting.Models.Data;

namespace WhaleSpotting.Services;

public interface IUserService
{
    public Task Update(User user);
}
