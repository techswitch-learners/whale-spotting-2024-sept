import { useContext, useEffect, useState } from "react"
import { LoginContext } from "../../Components/LoginManager/LoginManager"
import { getSightings } from "../../api/backendClient"
import "./Explore.scss"
import SightingsGallery from "../../Components/SightingsGallery/SightingsGallery"
import WhaleMap from "../../Components/WhaleMap/WhaleMap"
import { APIProvider } from "@vis.gl/react-google-maps"

export interface SightingType {
  id: number
  username: string
  speciesName: string
  latitude: number
  longitude: number
  photoUrl: string
  description?: string
  dateTime: Date
}

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY ? process.env.REACT_APP_GOOGLE_MAPS_API_KEY : ""

function Explore(): JSX.Element {
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
    <>
      <APIProvider apiKey={apiKey}>
        <WhaleMap sightings={sightings} />
      </APIProvider>
      <SightingsGallery />
    </>
  )
}

export default Explore
