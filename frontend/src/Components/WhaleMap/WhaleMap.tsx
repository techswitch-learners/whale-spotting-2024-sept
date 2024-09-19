import "./WhaleMap.scss"
import { AdvancedMarker, InfoWindow, Map } from "@vis.gl/react-google-maps"
import { SightingType } from "../../pages/Explore/Explore"
import { useState } from "react"

interface whaleMapProps {
  sightings: SightingType[]
}

const mapId = process.env.REACT_APP_GOOGLE_MAPS_MAP_ID ? process.env.REACT_APP_GOOGLE_MAPS_MAP_ID : ""

const WhaleMap = (props: whaleMapProps) => {
  const centre = { lat: 0, lng: 0 }
  const [selectedSighting, setSelectedSighting] = useState(0)

  const handleMarkerClick = (sightingId: number) => setSelectedSighting(sightingId)

  const handleClose = () => {
    setSelectedSighting(0)
  }

  const whaleMarker = require("../../images/Onlywhale.png")

  return (
    <div className="container-fluid map-container my-4 px-0">
      <Map
        style={{ borderRadius: "20px" }}
        defaultZoom={3}
        defaultCenter={centre}
        gestureHandling={"greedy"}
        disableDefaultUI
        mapId={mapId}
      >
        {props.sightings.map((sighting) => {
          return (
            <>
              <AdvancedMarker
                key={sighting.id}
                position={{ lat: sighting.latitude, lng: sighting.longitude }}
                onClick={() => handleMarkerClick(sighting.id)}
              >
                <img src={whaleMarker} alt="whale marker" width={37} height={32} />
              </AdvancedMarker>
            </>
          )
        })}
        {props.sightings.map((sighting) =>
          sighting.id === selectedSighting ? (
            <InfoWindow
              headerContent={<h6>Sighting {sighting.id}</h6>}
              key={sighting.id}
              position={{
                lat: sighting.latitude,
                lng: sighting.longitude,
              }}
              onCloseClick={handleClose}
            >
              <div>
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

export default WhaleMap
