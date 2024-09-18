import "./WhaleMap.scss"
import { Map, Marker } from "@vis.gl/react-google-maps"
import { SightingType } from "../../pages/Explore/Explore"

interface whaleMapProps {
  sightings: SightingType[]
}

const MapOfWhales = (props: whaleMapProps) => {
  const centre = { lat: 0, lng: 0 }

  return (
    <div className="map-container">
      <Map
        style={{ borderRadius: "20px" }}
        defaultZoom={3}
        defaultCenter={centre}
        gestureHandling={"greedy"}
        disableDefaultUI
      >
        {props.sightings.map((sighting) => (
          <Marker key={sighting.id} position={{ lat: sighting.latitude, lng: sighting.longitude }} />
        ))}
      </Map>
    </div>
  )
}

export default MapOfWhales
