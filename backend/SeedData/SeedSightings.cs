using Microsoft.EntityFrameworkCore;
using WhaleSpotting.Migrations;
using WhaleSpotting.Models.Data;

namespace WhaleSpotting.SeedData
{
    public class SeedSightings
    {
        private readonly WhaleSpottingContext _context;

        public SeedSightings(WhaleSpottingContext context)
        {
            _context = context;
        }

        private readonly IList<Sighting> DataSightings = new List<Sighting>
        {
            new Sighting()
            {
                UserId = 1,
                SpeciesId = 1,
                Latitude = 64.0123F,
                Longitude = -74.0122F,
                PhotoUrl =
                    "https://media.istockphoto.com/id/1436921059/photo/closeup-shot-of-a-humpback-whale-under-the-sea.jpg?s=2048x2048&w=is&k=20&c=vl4PFMO_hcVjZZeIq4MxGosri9aUll1nMAbndOxhm8E=",
                Description = "Saw this humback whale whilst out sailing",
                DateTime = DateTime.Parse("29Aug2024 16:40:00").ToUniversalTime(),
                IsApproved = false
            },
            new Sighting()
            {
                UserId = 2,
                SpeciesId = 1,
                Latitude = 54.012354f,
                Longitude = -94.012267f,
                PhotoUrl =
                    "https://media.istockphoto.com/id/1299555061/photo/close-up-of-humpback-whale-breaching-and-surface-activity.jpg?s=2048x2048&w=is&k=20&c=9ielo4BxhF6DCYi2BQXhIbP-obrHhiCU1Pla4mS_mhM=",
                Description = "Very sad to see this whale suffering",
                DateTime = DateTime.Parse("29Aug2023 16:40:00").ToUniversalTime(),
                IsApproved = false
            },
            new Sighting()
            {
                UserId = 2,
                SpeciesId = 1,
                Latitude = 4.012354F,
                Longitude = 44.012267F,
                PhotoUrl =
                    "https://images.unsplash.com/photo-1531739419660-bd4a79e4deca?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                Description = "Another pic",
                DateTime = DateTime.Parse("29Aug2023 16:40:00").ToUniversalTime(),
                IsApproved = false
            },
            new Sighting()
            {
                UserId = 2,
                SpeciesId = 1,
                Latitude = 54.012354F,
                Longitude = -94.012267F,
                PhotoUrl =
                    "https://images.unsplash.com/photo-1520646924857-261be3037bc7?q=80&w=3069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                Description = "Test Whale pic",
                DateTime = DateTime.Parse("29Sep2023 16:40:00").ToUniversalTime(),
                IsApproved = false
            },
            new Sighting()
            {
                UserId = 2,
                SpeciesId = 1,
                Latitude = 54.012354F,
                Longitude = -94.012267F,
                PhotoUrl =
                    "https://images.unsplash.com/photo-1723246619553-fd5685fb559f?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                Description = "Test Whale pic",
                DateTime = DateTime.Parse("29May2023 15:30:00").ToUniversalTime(),
                IsApproved = false
            },
            new Sighting()
            {
                UserId = 2,
                SpeciesId = 1,
                Latitude = 54.012354F,
                Longitude = -94.012267F,
                PhotoUrl =
                    "https://images.unsplash.com/photo-1570913179118-f3d24be1d1f7?q=80&w=3943&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                Description = "Test Whale pic",
                DateTime = DateTime.Parse("29Mar2023 13:42:00").ToUniversalTime(),
                IsApproved = true
            },
            new Sighting()
            {
                UserId = 1,
                SpeciesId = 33,
                Latitude = 86.045654F,
                Longitude = 100.012346F,
                PhotoUrl =
                    "https://i.abcnewsfe.com/a/ccc2de0c-4237-45de-9579-ac66cc27d9e9/humpback-whale-gty-jt-240220_1708450395992_hpMain.jpg",
                Description = "",
                DateTime = DateTime.Parse("18Sept2024 10:24:00").ToUniversalTime(),
                IsApproved = true
            }
        };

        public void SeedSighting()
        {
            if (!_context.Sightings.Any())
            {
                _context.Sightings.AddRange(DataSightings);
                _context.SaveChanges();
            }
        }
    }
}
