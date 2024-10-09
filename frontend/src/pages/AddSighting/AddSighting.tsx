import React, { FormEvent, useContext } from "react"
import { useState } from "react"
import { SpeciesDropdown } from "../../Components/SpeciesDropdown/SpeciesDropdown"
import "./AddSighting.scss"
import { useNavigate } from "react-router-dom"
import { LoginContext } from "../../Components/LoginManager/LoginManager"
import { createSighting } from "../../api/backendClient"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DateTimePicker } from "@mui/x-date-pickers"
import dayjs, { Dayjs } from "dayjs"
import "dayjs/locale/en-gb"
import { AreaLocationDropdown } from "../../Components/AreaLocationDropDown/AreaLocationDropDown"

export function AddSighting(): JSX.Element {
  const loginContext = useContext(LoginContext)

  const [latitude, setLatitude] = useState("0.0")
  const [longitude, setLongitude] = useState("0.0")
  const [photoUrl, setPhotoUrl] = useState("")
  const [description, setDescription] = useState("")
  const [dateTime, setDateTime] = useState<Dayjs>(dayjs())
  const [speciesId, setSpeciesId] = useState(1)
  const [errorMessage, setErrorMessage] = useState("")
  const navigate = useNavigate()

  async function submitSighting(event: FormEvent) {
    event.preventDefault()

    try {
      const response = await createSighting(
        loginContext.jwt,
        speciesId,
        parseFloat(latitude),
        parseFloat(longitude),
        photoUrl,
        description,
        dateTime?.toDate(),
      )

      if (!response.ok) {
        setErrorMessage("Oh no! Something did not go swimmingly, please try again.")
      } else {
        console.log("New pic uploaded")
        navigate("/explore")
      }
    } catch (err) {
      setErrorMessage("Error: Please contact support.")
    }
  }

  function getSpeciesIdFromDropdown(speciesIdFromDropdown: number) {
    setSpeciesId(speciesIdFromDropdown)
  }

  function getLatFromDropdown(latFromDropdown: number) {
    setLatitude(String(latFromDropdown))
  }

  function getLongFromDropdown(longFromDropDown: number) {
    setLongitude(String(longFromDropDown))
  }

  function getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(String(position.coords.latitude))
          setLongitude(String(position.coords.longitude))
        },
        (error) => {
          console.error("Error getting user location:", error)
        },
      )
    } else {
      console.error("Geolocation is not supported by this browser.")
    }
  }

  return (
    <div className="add-a-sighting-page container justify-content-center">
      <h1 className="title pt-4">Add a Sighting</h1>
      <div className="container col-10 pt-3 mx-auto">
        <p className="row justify-content-center">{errorMessage}</p>
        <form className="addSighting-form container justify-content-center row" method="post" onSubmit={submitSighting}>
          <div className="form-group row justify-content-center pb-4">
            <label htmlFor="species" className="col-lg-3 col-sm-2 col-form-label">
              Species:
            </label>
            <div className="col-lg-7 col-sm-3">
              <SpeciesDropdown getSpeciesIdFromDropdown={getSpeciesIdFromDropdown} />
            </div>
          </div>
          <div className="form-group row justify-content-center pb-4">
            <label htmlFor="areaLocation" className="col-lg-3 col-sm-2 col-form-label">
              Get Lat & Long from Area/Location:
            </label>
            <div className="col-lg-7 col-sm-3">
              <AreaLocationDropdown getLatFromDropdown={getLatFromDropdown} getLongFromDropdown={getLongFromDropdown} />
            </div>
          </div>
          <div className="col-lg-7 col-sm-3">
            <button
              id="location-button"
              data-testid="location-button"
              className="btn btn-primary btn-md w-50"
              onClick={() => getUserLocation()}
            >
              Get My Location
            </button>
          </div>
          <div className="form-group row justify-content-center pb-4">
            <label htmlFor="latitude" className="col-lg-3 col-sm-2 col-form-label">
              Latitude:
            </label>
            <div className="col-lg-7 col-sm-3">
              <input
                type="text"
                id="latitude"
                className="form-control"
                value={latitude}
                onChange={(event) => setLatitude(event.target.value)}
              />
            </div>
          </div>
          <div className="form-group row justify-content-center pb-4">
            <label htmlFor="longitude" className="col-lg-3 col-sm-2 col-form-label">
              Longitude:
            </label>
            <div className="col-lg-7 col-sm-3">
              <input
                type="text"
                id="longitude"
                className="form-control"
                value={longitude}
                onChange={(event) => setLongitude(event.target.value)}
              />
            </div>
          </div>
          <div className="form-group row justify-content-center pb-4">
            <label htmlFor="photoUrl" className="col-lg-3 col-sm-2 col-form-label">
              Photo URL:
            </label>
            <div className="col-lg-7 col-sm-3">
              <input
                type="url"
                id="photoUrl"
                className="form-control"
                required
                value={photoUrl}
                onChange={(event) => setPhotoUrl(event.target.value)}
              />
            </div>
          </div>
          <div className="form-group row justify-content-center pb-4">
            <label htmlFor="description" className="col-lg-3 col-sm-2 col-form-label">
              Description:
            </label>
            <div className="col-lg-7 col-sm-3">
              <textarea
                id="description"
                className="form-control"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>
          </div>
          <div className="form-group row justify-content-center pb-4">
            <label htmlFor="dateTime" className="col-lg-3 col-sm-2 col-form-label">
              Date/Time:
            </label>
            <div className="col-lg-7 col-sm-3">
              <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"en-gb"}>
                <DateTimePicker
                  defaultValue={dayjs()}
                  value={dateTime}
                  onChange={(newValue) => setDateTime(newValue ? newValue : dayjs())}
                />
              </LocalizationProvider>
            </div>
          </div>
          <button type="submit" className="btn btn-outline-success px-4" style={{ width: "200px" }}>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
