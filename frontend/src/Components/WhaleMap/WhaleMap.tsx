import "./WhaleMap.scss"
import { InfoWindow, Map, Marker } from "@vis.gl/react-google-maps"
import { SightingType } from "../../pages/Explore/Explore"
import { useState } from "react"

interface whaleMapProps {
  sightings: SightingType[]
}

const MapOfWhales = (props: whaleMapProps) => {
  const centre = { lat: 0, lng: 0 }
  const [selectedSighting, setSelectedSighting] = useState(0)

  const handleMarkerClick = (sightingId: number) => setSelectedSighting(sightingId)

  const handleClose = () => {
    setSelectedSighting(0)
  }

  return (
    <div className="map-container">
      <Map
        style={{ borderRadius: "20px" }}
        defaultZoom={3}
        defaultCenter={centre}
        gestureHandling={"greedy"}
        disableDefaultUI
      >
        {props.sightings.map((sighting) => {
          return (
            <>
              <Marker
                key={sighting.id}
                position={{ lat: sighting.latitude, lng: sighting.longitude }}
                onClick={() => handleMarkerClick(sighting.id)}
              />
            </>
          )
        })}
        {props.sightings.map((sighting) =>
          sighting.id === selectedSighting ? (
            <InfoWindow
              key={sighting.id}
              position={{
                lat: sighting.latitude,
                lng: sighting.longitude,
              }}
              onCloseClick={handleClose}
            >
              <div>
                <h4>Sighting {sighting.id}</h4>
                <p>Spotted by: {sighting.username}</p>
                <p>Species: {sighting.speciesName}</p>
              </div>
            </InfoWindow>
          ) : null,
        )}
      </Map>
    </div>
  )
}

export default MapOfWhales
