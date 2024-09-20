import { useContext, useEffect, useState } from "react"
import { LoginContext } from "../../Components/LoginManager/LoginManager"
import { getSightings } from "../../api/backendClient"
import { SightingType } from "../../pages/Explore/Explore"
import "./SightingsGallery.scss"
import { Link } from "react-router-dom"

const formatDate = (dateTime: Date) => {
    return new Date(dateTime).toLocaleString("en-GB", { timeZone: "UTC" })
}

function SightingsGallery(): JSX.Element {
    const [sightings, setSightings] = useState<SightingType[]>([])
    const loginContext = useContext(LoginContext)
    const jwt = loginContext.jwt

    useEffect(() => {
        async function fetchSightings() {
            try {
                const response = await getSightings(jwt)
                if (!response.ok) {
                    throw new Error("Network response failed")
                }
                const result = await response.json()
                setSightings(result.sightings)
            } catch (error) {
                console.error("Error fetching sightings:", error)
            }
        }

        fetchSightings()
    }, [jwt])

    return (
        <div>
            <div className="banner">
                <h1>Sightings Gallery</h1>
            </div>
            <div className="gallery-container">
                {sightings.map(sighting => (
                    <div className="card" style={{ width: "20rem" }}>
                        <Link className='link' to={`/sightings/${sighting.id}`}>
                            <img className="card-img-top" src={sighting.photoUrl} alt="Card image cap" style={{ maxHeight: "12rem", objectFit: "cover" }} />
                            <div className="card-username-species">
                                <h6 className="username">{sighting.username}</h6>
                                <p className="species-name">{sighting.speciesName}</p>
                            </div>
                            <div className="card-body">
                                <p className="card-text">{sighting.description}</p>
                            </div>
                            <div className="card-img-overlay">
                                <p>{sighting.id}</p>
                                <p>{formatDate(sighting.dateTime)}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SightingsGallery
