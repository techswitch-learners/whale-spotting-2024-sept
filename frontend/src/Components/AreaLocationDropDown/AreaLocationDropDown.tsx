import { useState } from "react"

interface AreaLocationType {
  areaLocationId: number
  locationName: string
  latitude: number
  longitude: number
  radius: number
}

export function AreaLocationDropdown({
  getLatFromDropdown,
  getLongFromDropdown,
}: {
  getLatFromDropdown(latFromDropdown: number): void
  getLongFromDropdown(longFromDropDown: number): void
}) {
  const [areaLocation, setAreaLocation] = useState<AreaLocationType[]>([])

  if (areaLocation.length === 0) {
    fetch("http://localhost:5280/arealocation", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setAreaLocation(data.listOfAreaLocation)
      })
  }

  if (!areaLocation) {
    return <div>Loading...</div>
  } else {
    return (
      <select
        id="arealocation"
        className="form-control"
        onChange={(event) => {
          getLatFromDropdown(areaLocation[event.target.selectedIndex].latitude)
          getLongFromDropdown(areaLocation[event.target.selectedIndex].longitude)
        }}
      >
        {areaLocation.map((option) => (
          <option value={option.areaLocationId}>
            {option.locationName} (Lat: {option.latitude} Long: {option.longitude} Radius: {option.radius})
          </option>
        ))}
      </select>
    )
  }
}
