namespace WhaleSpotting.Models.Response;

public class ProfileResponse
{
    public string UserName { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }

    public string Email { get; set; }
    public int TotalPointsEarned { get; set; }
    public string AboutMe { get; set; }
}
