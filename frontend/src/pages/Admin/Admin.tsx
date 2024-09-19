import { useContext, useEffect, useState } from "react"
import { LoginContext } from "../../Components/LoginManager/LoginManager"
import { approveSighting, fetchUnapprovedSightings, Sightings } from "../../api/backendClient"
import "./Admin.scss"
import { Link } from "react-router-dom"

const Admin = () => {
  const loginContext = useContext(LoginContext)
  const [sightings, setSightings] = useState<Sightings | null>(null)
  const [approvals, setApprovals] = useState(0)

  useEffect(() => {
    fetchUnapprovedSightings(loginContext.jwt).then((response) => setSightings(response))
  }, [loginContext.jwt, approvals])

  const handleClick = (header: string, id: number) => {
    approveSighting(header, id).then((response) => {
      if (response.ok) {
        setApprovals(approvals + 1)
      }
    })
  }

  const formatDate = (dateTime: string) => {
    return new Date(dateTime).toLocaleString("en-GB", { timeZone: "UTC" })
  }

  if (loginContext.roleType === "Admin") {
    return (
      <div className="px-4">
        <h1 data-testid="adminTitle" className="py-4">
          Admin Page
        </h1>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Sighting Id</th>
                <th scope="col">User Name</th>
                <th scope="col">Species Name</th>
                <th scope="col">Latitude</th>
                <th scope="col">Longitude</th>
                <th scope="col">Photo</th>
                <th scope="col">Description</th>
                <th scope="col">Submission Date/Time</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sightings?.sightings.map((sighting) => (
                <tr>
                  <th scope="row"><Link to={`/sightings/${sighting.id}`}>{sighting.id}</Link></th>
                  <td>{sighting.username}</td>
                  <td>{sighting.speciesName}</td>
                  <td>{sighting.latitude}</td>
                  <td>{sighting.longitude}</td>
                  <td>
                    <img className="img-thumbnail custom-thumbnail" alt="A whale" src={sighting.photoUrl} />
                  </td>
                  <td>{sighting.description}</td>
                  <td>{formatDate(sighting.dateTime)}</td>
                  <td>
                    <button
                      className="btn btn-primary btn-md"
                      onClick={() => handleClick(loginContext.jwt, sighting.id)}
                    >
                      Approve
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <h1>You are not authorized to view this page</h1>
      </div>
    )
  }
}

export default Admin
