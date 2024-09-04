using Microsoft.AspNetCore.Identity;
using WhaleSpotting.Models.Data;

namespace WhaleSpotting.Data;

public static class SampleUsers
{
    public const int NumberOfUsers = 2;

    private static readonly IList<IList<string>> DataUsers = new List<IList<string>>
    {
        new List<string> { "Sam", "White", "sam1", "user1@gmail.com", "Pa$$word1" },
        new List<string> { "Evie", "Brown", "evie2", "user2@gmail.com", "Pa$$word2" },
    };

    public static async Task CreateAdminAsync(UserManager<User> userManager)
    {
        var poweruser = new User
        {
            FirstName = "John",
            LastName = "Wick",
            UserName = "Admin",
            Email = "admin@email.com",
        };
        string adminPassword = "Pa$$word123";

        var createPowerUser = await userManager.CreateAsync(poweruser, adminPassword);
        if (createPowerUser.Succeeded)
        {
            await userManager.AddToRoleAsync(poweruser, "Admin");
        }
    }

    public static async Task CreateUsersAsync(UserManager<User> userManager)
    {
        foreach (var data in DataUsers)
        {
            var user = new User
            {
                FirstName = data[0],
                LastName = data[1],
                UserName = data[2],
                Email = data[3],
            };
            string userPassword = data[4];

            var createUser = await userManager.CreateAsync(user, userPassword);
            if (createUser.Succeeded)
            {
                await userManager.AddToRoleAsync(user, "User");
            }
        }
    }
}
