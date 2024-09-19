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
                UserId = 2,
                SpeciesId = 63,
                Latitude = 15.764F,
                Longitude = -101.935F,
                PhotoUrl =
                    "https://www.fisheries.noaa.gov/s3//dam-migration/5184x3456-pantropical-spotted-dolphin-guam.jpg",
                Description = "Saw this on my morning sail, how cute. I think I have a new best friend.",
                DateTime = DateTime.Parse("18Sept2024 10:24:00").ToUniversalTime(),
                IsApproved = true
            },            
            new Sighting()
            {
                UserId = 2,
                SpeciesId = 1,
                Latitude = 54.012354F,
                Longitude = -94.012267F,
                PhotoUrl =
                    "https://images.unsplash.com/photo-1570913179118-f3d24be1d1f7?q=80&w=3943&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                Description = "Check out that beautiful fin! This beautiful creature gave me a little wave hello today.",
                DateTime = DateTime.Parse("29Mar2023 13:42:00").ToUniversalTime(),
                IsApproved = true
            },
            new Sighting()
            {
                UserId = 2,
                SpeciesId = 1,
                Latitude = 54.012354F,
                Longitude = -94.012267F,
                PhotoUrl =
                    "https://images.unsplash.com/photo-1723246619553-fd5685fb559f?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                Description = "Splashy splashy! Catching some rays on this gorgeous, sunny day.",
                DateTime = DateTime.Parse("29May2023 15:30:00").ToUniversalTime(),
                IsApproved = false
            },
            new Sighting()
            {
                UserId = 1,
                SpeciesId = 90,
                Latitude = 2.1801F,
                Longitude = -76.696F,
                PhotoUrl =
                    "https://inaturalist-open-data.s3.amazonaws.com/photos/162435290/medium.jpg",
                Description = "Hellooo World!!!",
                DateTime = DateTime.Parse("09Jan2022 09:24:00").ToUniversalTime(),
                IsApproved = true
            },
            new Sighting()
            {
                UserId = 1,
                SpeciesId = 77,
                Latitude = 55.555F,
                Longitude = -77.777F,
                PhotoUrl =
                    "https://inaturalist-open-data.s3.amazonaws.com/photos/26838108/medium.jpg",
                Description = "Jumping around the sea",
                DateTime = DateTime.Parse("03Aug2023 11:22:00").ToUniversalTime(),
                IsApproved = true
            },
            new Sighting()
            {
                UserId = 1,
                SpeciesId = 64,
                Latitude = 45.115F,
                Longitude = 120.45F,
                PhotoUrl =
                    "https://inaturalist-open-data.s3.amazonaws.com/photos/380921709/large.jpeg",
                Description = "I'm not a whale L.O.L.",
                DateTime = DateTime.Parse("17Mar2024 17:13:00").ToUniversalTime(),
                IsApproved = true
            },
            new Sighting()
            {
                UserId = 3,
                SpeciesId = 54,
                Latitude = 11.765F,
                Longitude = -39.115F,
                PhotoUrl =
                    "https://wwf.ca/wp-content/uploads/2020/02/Narwhal-Two-narwhal-surfacing-to-breathe-in-Lancaster-Sound-Nunavut-Canada-%C2%A9-Paul-Nicklen_National-Geographic-Stock-_-WWF-Canada-scaled-e1583782336735.jpg",
                Description = "A whale meets a unicorn. Pure perfection.",
                DateTime = DateTime.Parse("08Apr2022 12:13:00").ToUniversalTime(),
                IsApproved = true
            },
            new Sighting()
            {
                UserId = 2,
                SpeciesId = 48,
                Latitude = 99.665F,
                Longitude = -111.435F,
                PhotoUrl =
                    "https://i0.wp.com/www.australiangeographic.com.au/wp-content/uploads/2018/06/indo-pacific-humpback-dolphin.jpg?fit=1000%2C588&ssl=1",
                Description = "I'M PINK",
                DateTime = DateTime.Parse("08Sept2024 11:13:00").ToUniversalTime(),
                IsApproved = true
            },
            new Sighting()
            {
                UserId = 1,
                SpeciesId = 1,
                Latitude = 64.0123F,
                Longitude = -74.0122F,
                PhotoUrl =
                    "https://media.istockphoto.com/id/1436921059/photo/closeup-shot-of-a-humpback-whale-under-the-sea.jpg?s=2048x2048&w=is&k=20&c=vl4PFMO_hcVjZZeIq4MxGosri9aUll1nMAbndOxhm8E=",
                Description = "Saw this humpback whale whilst out sailing",
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
                Description = "A lucky spot, I only just manage to catch this before it disappeared.",
                DateTime = DateTime.Parse("29Sep2023 16:40:00").ToUniversalTime(),
                IsApproved = false
            },
            new Sighting()
            {
                UserId = 1,
                SpeciesId = 33,
                Latitude = 34.462F,
                Longitude = 18.99F,
                PhotoUrl =
                    "https://inaturalist-open-data.s3.amazonaws.com/photos/315414123/original.jpg",
                Description = "Went for a swim this morning and look who came to say hello.",
                DateTime = DateTime.Parse("18Sept2024 10:24:00").ToUniversalTime(),
                IsApproved = true
            },
            new Sighting()
            {
                UserId = 2,
                SpeciesId = 22,
                Latitude = 86.045654F,
                Longitude = 100.012346F,
                PhotoUrl =
                    "https://i.abcnewsfe.com/a/ccc2de0c-4237-45de-9579-ac66cc27d9e9/humpback-whale-gty-jt-240220_1708450395992_hpMain.jpg",
                Description = "Just wow.",
                DateTime = DateTime.Parse("18Sept2024 10:24:00").ToUniversalTime(),
                IsApproved = true
            },
            new Sighting()
            {
                UserId = 2,
                SpeciesId = 34,
                Latitude = 26.7614F,
                Longitude = -76.6442F,
                PhotoUrl =
                    "https://marinesanctuary.org/wp-content/uploads/2021/10/cuviers-beaked-whale-pc-charlotte-kirchner.png",
                Description = "Peak-a-boo! What a big jump, how incredible.",
                DateTime = DateTime.Parse("18Sept2024 10:24:00").ToUniversalTime(),
                IsApproved = true
            },
            new Sighting()
            {
                UserId = 3,
                SpeciesId = 38,
                Latitude = 27.1801F,
                Longitude = -92.696F,
                PhotoUrl =
                    "https://upload.wikimedia.org/wikipedia/commons/a/a6/Descri%C3%A7%C3%A3o_in%C3%ADcio_ou_comportamento.jpg",
                Description = "Check this out, how cool! I didn't realise that dolphins could jump this high.",
                DateTime = DateTime.Parse("18Sept2024 10:24:00").ToUniversalTime(),
                IsApproved = true
            },
            new Sighting()
            {
                UserId = 3,
                SpeciesId = 66,
                Latitude = 11.734F,
                Longitude = -129.26F,
                PhotoUrl =
                    "https://www.fisheries.noaa.gov/s3//styles/full_width/s3/dam-migration/750x500-pygmy-killer-whale.jpg?itok=2s7aExxG",
                Description = "A family of pygmy killer whales, what a truly magical experience.",
                DateTime = DateTime.Parse("18Sept2024 10:24:00").ToUniversalTime(),
                IsApproved = true
            },
            new Sighting()
            {
                UserId = 2,
                SpeciesId = 70,
                Latitude = 40.160F,
                Longitude = -87.841F,
                PhotoUrl =
                    "https://upload.wikimedia.org/wikipedia/commons/e/ec/SEFSC-PAM-Rices-whale.png",
                Description = "Got this from on my drone whilst out sailing, hadn't even realised it was there, that was lucky!",
                DateTime = DateTime.Parse("18Sept2024 10:24:00").ToUniversalTime(),
                IsApproved = true
            },
            new Sighting()
            {
                UserId = 1,
                SpeciesId = 72,
                Latitude = 1.318F,
                Longitude = -83.665F,
                PhotoUrl =
                    "https://www.worldanimalprotection.org.uk/cdn-cgi/image/fit=cover,width=1280/siteassets/article/dolphin-body-image.jpg",
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
