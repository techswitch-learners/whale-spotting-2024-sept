import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"
import { SightingType } from "../../pages/Explore/Explore"

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY ? process.env.REACT_APP_GOOGLE_MAPS_API_KEY : ""

const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
}
const center = {
  lat: 0,
  lng: 0,
}

interface whaleMapProps {
  sightings: SightingType[]
}

const WhaleMap = (props: whaleMapProps) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
  })

  if (loadError) {
    return <div>Error loading maps</div>
  }

  if (!isLoaded) {
    return <div>Loading maps</div>
  }

  return (
    <div>
      <GoogleMap mapContainerStyle={mapContainerStyle} zoom={3} center={center}>
        {props.sightings.map((sighting) => (
          <Marker position={{ lat: 55.3617609, lng: -3.4433238 }} />
        ))}
      </GoogleMap>

      {/* <Marker position={{lat: sighting.latitude, lng: sighting.longitude}} /> */}
      {/* {props.sightings.map((sighting) => (<div>{sighting.latitude}</div>))} */}
    </div>
  )
}

export default WhaleMap
