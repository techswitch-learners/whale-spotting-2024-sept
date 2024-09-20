import { useEffect, useState } from "react"
import { getSpecies } from "../../api/backendClient"
import { SpeciesType } from "../../pages/Species/Species"
import "./SpeciesGallery.scss"

function SpeciesGallery(): JSX.Element {
  const [species, setSpecies] = useState<SpeciesType[]>([])

  useEffect(() => {
    async function fetchSpecies() {
      try {
        const response = await getSpecies()
        if (!response.ok) {
          throw new Error("Network response failed")
        }
        const result = await response.json()
        setSpecies(result.listOfSpecies)
      } catch (error) {
        console.error("Error fetching sightings:", error)
      }
    }

    fetchSpecies()
  }, [])

  return (
    <div>
      <div className="banner-species">
        <h1>Species Gallery</h1>
      </div>
      <div className="species-container">
        {species.map((s) => (
          <div className="card" style={{ width: "20rem" }}>
            <img
              className="card-img-top"
              src={s.exampleLink}
              alt="Card cap"
              style={{ maxHeight: "12rem", objectFit: "cover" }}
            />
            <div className="species-card-body">
              <a href={s.wikiLink} target="_blank" rel="noreferrer">
                <h5 className="species">{s.speciesName}</h5>
              </a>
              <p className="total-sightings">Total number of sightings: {s.totalSightings}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SpeciesGallery
