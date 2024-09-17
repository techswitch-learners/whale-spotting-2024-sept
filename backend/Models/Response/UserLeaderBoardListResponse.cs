using System.Runtime.InteropServices;
using WhaleSpotting.Models.Data;

namespace WhaleSpotting.Models.Response;

public class UserLeaderBoardListResponse()
{
    public List<UserLeaderBoardResponse> UserLeaderBoard { get; set; }

    public void SetList(List<User> usersList)
    {
        UserLeaderBoard = new List<UserLeaderBoardResponse>();

        foreach (var user in usersList)
        {
            UserLeaderBoardResponse userLeaderBoardResponse = new UserLeaderBoardResponse()
            {
                UserName = user.UserName,
                TotalPointsEarned = user.TotalPointsEarned
            };

            UserLeaderBoard.Add(userLeaderBoardResponse);
        }
    }
}
