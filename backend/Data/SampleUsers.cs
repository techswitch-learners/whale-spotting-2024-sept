using Microsoft.AspNetCore.Identity;
using WhaleSpotting.Models.Data;

namespace WhaleSpotting.Data;

public static class SampleUsers
{
    public const int NumberOfUsers = 1;

    // private static readonly IList<IList<string>> Data = new List<IList<string>>
    // {
    //         //UserName, Email,  PasswordHash, Role(2 for Admin)
    //          new List<string> { "admin", "admin@gmail.com", "password123","2" },
    // };

    //  public static IEnumerable<User> GetUsers(UserManager<User> userManager)
    // {
    //         // return Enumerable.Range(0, NumberOfUsers).Select(index => CreateRandomUserAsync(index, userManager));
    //         return (IEnumerable<User>)CreateRandomUserAsync(0, userManager);
    // }
    public static async Task CreateAdminAsync(UserManager<User> userManager)
    {
        //Here you could create the super admin who will maintain the web app
        var poweruser = new User { UserName = "Admin", Email = "admin@email.com", };
        string adminPassword = "password123";

        var createPowerUser = await userManager.CreateAsync(poweruser, adminPassword);
        if (createPowerUser.Succeeded)
        {
            //here we tie the new user to the role
            await userManager.AddToRoleAsync(poweruser, "Admin");
            // return new User
            // {
            //     UserName = "Admin",
            //     Email = "admin@email.com",
            // };
        }
        // else
        // {
        //     return null;
        // }
    }
}
