namespace WhaleSpotting.Models.Response;

public class UserLeaderBoardResponse
{
    public required string UserName { get; set; }
    public required int TotalPointsEarned { get; set; }
}
