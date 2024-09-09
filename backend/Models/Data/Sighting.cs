using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace WhaleSpotting.Models.Data;

public class Sighting
{
    [Key]
    public int Id { get; set; }
    public int UserId { get; set; }

    public int SpeciesId { get; set; }
    public Species Species {get; set;}
    
    public float Latitude { get; set; }
    public float Longitude { get; set; }
    public string PhotoUrl { get; set; }
    public string? Description { get; set; }
    public DateTime DateTime { get; set; }
    public bool IsApproved { get; set; } = false;
}
