import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY ? process.env.REACT_APP_GOOGLE_MAPS_API_KEY : ""

const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
}
const center = {
  lat: 0,
  lng: 0,
}

const WhaleMap = () => {
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
        <Marker position={center} />
      </GoogleMap>
    </div>
  )
}

export default WhaleMap
