namespace WhaleSpotting.Models.Request;

public class UpdateUserResponse
{
    public int Id { get; set; }
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public string? AboutMe { get; set; }
}
