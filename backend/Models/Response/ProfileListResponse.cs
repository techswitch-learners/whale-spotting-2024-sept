using WhaleSpotting.Models.Data;

namespace WhaleSpotting.Models.Response;

public class ProfileListResponse()
{
    public List<ProfileResponse> UserProfiles { get; set; }

    public void SetList(List<User> usersList)
    {
        UserProfiles = new List<ProfileResponse>();

        foreach (var user in usersList)
        {
            ProfileResponse profileResponse = new ProfileResponse()
            {
                UserName = user.UserName,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Email = user.Email,
                TotalPointsEarned = user.TotalPointsEarned,
                AboutMe = user.AboutMe
            };

            UserProfiles.Add(profileResponse);
        }
    }
}