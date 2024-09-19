import { FormEvent, useContext, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { updateSighting } from "../../api/backendClient"
import { LoginContext } from "../../Components/LoginManager/LoginManager"
import { SpeciesDropdown } from "../../Components/SpeciesDropdown/SpeciesDropdown"
import "./UpdateSighting.scss"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DateTimePicker } from "@mui/x-date-pickers"
import dayjs, { Dayjs } from "dayjs"
import "dayjs/locale/en-gb"

export function UpdateSighting(): JSX.Element {
  const loginContext = useContext(LoginContext)
  const location = useLocation()
  const sightingData = location.state

  //const [id, setId] = useState(sightingData.id)
  const [dateTime, setDateTime] = useState<Dayjs>(dayjs(sightingData.dateTime))
  const [description, setDescription] = useState(sightingData.description)
  const [photoUrl, setPhotoUrl] = useState(sightingData.photoUrl)
  const [speciesId, setSpeciesId] = useState(sightingData.speciesId)
  const [latitude, setLatitude] = useState(sightingData.latitude)
  const [longitude, setLongitude] = useState(sightingData.longitude)
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  function trySightingUpdate(event: FormEvent) {
    event.preventDefault()
    updateSighting(
      loginContext.jwt,
      sightingData.id,
      speciesId,
      latitude,
      longitude,
      photoUrl,
      description,
      dateTime?.toDate(),
    )
      .then((response) => {
        if (!response.ok) {
          return response.json().then((errorData) => {
            throw new Error(JSON.stringify(errorData.errors))
          })
        }
        return response.json()
      })
      .then(() => {
        navigate("/sightings/:sightingData.id")
      })
      .catch((error) => {
        setError(error.message)
      })
  }
  function getSpeciesIdFromDropdown(speciesIdFromDropdown: number) {
    setSpeciesId(speciesIdFromDropdown)
  }

  return (
    <div className="container col-10 col-md-6 pt-4 mx-auto text-center">
      <div className="row">
        <h1 className="title">Update Sighting no.{sightingData.id}</h1>
      </div>
      <div className="row justify-content-center">
        <form className="form justify-content-center" onSubmit={trySightingUpdate}>
          <div className="form-group row">
            <label htmlFor="species" className="col-sm-2 col-form-label">
              Species:
            </label>
            <div className="col-sm-3">
              <SpeciesDropdown getSpeciesIdFromDropdown={getSpeciesIdFromDropdown} />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="latitude" className="col-sm-2 col-form-label">
              Latitude:
            </label>
            <div className="col-sm-3">
              <input
                type="text"
                id="latitude"
                className="form-control"
                value={latitude}
                onChange={(event) => setLatitude(event.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="longitude" className="col-sm-2 col-form-label">
              Longitude:
            </label>
            <div className="col-sm-3">
              <input
                type="text"
                id="longitude"
                className="form-control"
                value={longitude}
                onChange={(event) => setLongitude(event.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="photoUrl" className="col-sm-2 col-form-label">
              Photo URL:
            </label>
            <div className="col-sm-3">
              <input
                type="url"
                id="photoUrl"
                className="form-control"
                value={photoUrl}
                onChange={(event) => setPhotoUrl(event.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="description" className="col-sm-2 col-form-label">
              Description:
            </label>
            <div className="col-sm-3">
              <textarea
                id="description"
                className="form-control"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="dateTime" className="col-sm-2 col-form-label">
              Date/Time:
            </label>
            <div className="col-sm-3">
              <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"en-gb"}>
                <DateTimePicker
                  defaultValue={dayjs()}
                  value={dateTime}
                  onChange={(newValue) => setDateTime(newValue ? newValue : dayjs())}
                />
              </LocalizationProvider>
            </div>
          </div>
          <div className="form-group row justify-content-center">
            <div className="col-sm-10 my-3">
              <button className="btn btn-outline-success px-4" style={{ width: "200px" }} onClick={trySightingUpdate}>
                Update
              </button>
            </div>
          </div>
          {error && <p style={{ color: "red" }}> {error}</p>}
        </form>
      </div>
    </div>
  )
}
