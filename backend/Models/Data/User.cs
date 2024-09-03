using Microsoft.AspNetCore.Identity;

namespace WhaleSpotting.Models.Data;

public class User : IdentityUser<int>
{
    public string? FirstName { get; set; }

    public string? LastName { get; set; }

    public int TotalPointsEarned { get; set; }

    public string? AboutMe { get; set; }

    public bool IsSuspended { get; set; }
}
