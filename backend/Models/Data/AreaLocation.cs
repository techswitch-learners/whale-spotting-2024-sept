using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace WhaleSpotting.Models.Data;

public class AreaLocation
{
    [Key]
    public int Id { get; set; }
    public string LocationName { get; set; }
    public float Latitude { get; set; }
    public float Longitude { get; set; }
    public float Radius { get; set; }
}
