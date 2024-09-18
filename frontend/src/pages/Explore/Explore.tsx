import React, { useContext, useEffect, useState } from "react"
import { LoginContext } from "../../Components/LoginManager/LoginManager"
import { getSightings } from "../../api/backendClient"
import "./Explore.scss"
import WhaleMap from "../../Components/WhaleMap/WhaleMap"

export interface SightingType {
  username: string
  speciesName: string
  latitude: number
  longitude: number
  photoUrl: string
  description?: string
  dateTime: Date
}

const formatDate = (dateTime: Date) => {
  return new Date(dateTime).toLocaleString("en-GB", { timeZone: "UTC" })
}

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
      <h1>Explore</h1>
      <WhaleMap sightings={sightings} />
      {sightings.map((sighting) => (
        <>
          <p>{sighting.username}</p>
          <p>{sighting.speciesName}</p>
          <img src={sighting.photoUrl} className="thumbnail-explore-gallery" alt="A whale" />
          <p>Latitude: {sighting.latitude}</p>
          <p>Longitude: {sighting.longitude}</p>
          {sighting.description && <p>Description: {sighting.description}</p>}
          <p>Date: {formatDate(sighting.dateTime)}</p>
        </>
      ))}
    </>
  )
}

export default Explore
