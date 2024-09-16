namespace WhaleSpotting.Models.Response;

public class UserLeaderBoardResponse
{
    public required int Id { get; set; }
    public required string UserName { get; set; }
    public required int TotalPointsEarned { get; set; }
}
