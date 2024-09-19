import { SetStateAction, useContext, useEffect, useState } from "react"
import {
  deleteUserProfile,
  fetchUserProfile,
  Sightings,
  User,
  fetchApprovedSightingForUser,
  fetchUnapprovedSightingsForUser,
} from "../../api/backendClient"
import { LoginContext } from "../../Components/LoginManager/LoginManager"
import "./Profile.scss"
import { DeleteModal } from "../../Components/DeleteModal/DeleteModal"
import { useNavigate, Link } from "react-router-dom"

export function Profile(): JSX.Element {
  const [user, setUser] = useState<User | null>(null)
  const loginContext = useContext(LoginContext)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [approvedSightings, setApprovedSightings] = useState<Sightings | null>(null)
  const [unapprovedSightings, setUnapprovedSightings] = useState<Sightings | null>(null)
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const formatDate = (dateTime: string) => {
    return new Date(dateTime).toLocaleString("en-GB", { timeZone: "UTC" })
  }

  const getConfirmDelete = (confirmation: boolean) => {
    setShowDeleteModal(false)

    if (confirmation) {
      deleteUserProfile(loginContext.jwt)
        .then((response) => {
          if (!response.ok) {
            return response.json().then((errorData: { errors: SetStateAction<{ [key: string]: string[] }> }) => {
              throw new Error()
            })
          }
          loginContext.logOut()
          loginContext.saveRoleTypeToContext("")
          loginContext.saveJwtToContext("")
          navigate("/")
          return response.json()
        })
        .catch((error) => {})
    }
  }

  useEffect(() => {
    fetchUserProfile(loginContext.jwt).then((response) => setUser(response))
  }, [loginContext.jwt])

  const userData = { firstName: user?.firstName, lastName: user?.lastName, aboutMe: user?.aboutMe }

  if (!user) {
    return <section>You are not authorized to view this page</section>
  }

  if (approvedSightings === null) {
    fetchApprovedSightingForUser(loginContext.jwt)
      .then((response) => setApprovedSightings(response))
      .catch((err) => setError(err.message))
  }
  if (error) {
    return <div>Unable to get approved sightings data</div>
  }

  if (unapprovedSightings === null) {
    fetchUnapprovedSightingsForUser(loginContext.jwt)
      .then((response) => setUnapprovedSightings(response))
      .catch((err) => setError(err.message))
  }

  if (error) {
    return <div>Unable to get unapproved sightings data</div>
  }

  return (
    <>
      <div>
        <div className="container col-10 col-md-6 pt-3 mx-auto">
          <div className="card bg-light mb-3 mt-lg-5 mx-auto">
            <h4 className="card-header py-3 ps-4">Profile</h4>
            <div className="card-body px-4">
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="card-title mb-0">Username</h6>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">{user.userName}</p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">First name</h6>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">{user.firstName}</p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Last name</h6>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">{user.lastName}</p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Email</h6>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">{user.email}</p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Points earned</h6>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">{user.totalPointsEarned}</p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">About me</h6>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">{user.aboutMe}</p>
                </div>
              </div>
            </div>
            <div className="row g-0">
              <div className="col-6 p-2">
                <button
                  id="update-button"
                  data-testid="update-button"
                  className="btn btn-primary btn-md w-100"
                  onClick={() => navigate("/updateprofile", { state: userData })}
                >
                  Update
                </button>
              </div>
              <div className="col-6 p-2">
                <button
                  id="delete-button"
                  data-testid="delete-button"
                  className="btn btn-primary btn-md w-100"
                  onClick={() => setShowDeleteModal(true)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
          <div className="row g-0">
            <div className="col-6 p-2">
              <button
                id="update-button"
                data-testid="update-button"
                className="btn btn-primary btn-md w-100"
                onClick={() => navigate("/updateprofile", { state: userData })}
              >
                Update
              </button>
            </div>
            <div className="col-6 p-2">
              <button
                id="delete-button"
                data-testid="delete-button"
                className="btn btn-primary btn-md w-100"
                onClick={() => setShowDeleteModal(true)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
        {showDeleteModal && <DeleteModal getConfirmDelete={getConfirmDelete} />}
      </div>
      <h1 className="py-3">Unapproved Sightings</h1>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Sighting ID</th>
              <th>DateTime</th>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>Description</th>
              <th>Species Name</th>
              <th>Photo</th>
            </tr>
          </thead>
          <tbody>
            {unapprovedSightings &&
              unapprovedSightings?.sightings.map((sighting, index) => (
                <tr key={index}>
                  <td>
                    <Link to={`/sightings/${sighting.id}`}>{sighting.id}</Link>
                  </td>
                  <td>{formatDate(sighting.dateTime)}</td>
                  <td>{sighting.latitude}</td>
                  <td>{sighting.longitude}</td>
                  <td>{sighting.description}</td>
                  <td>{sighting.speciesName}</td>
                  <td>
                    <img className="img-thumbnail custom-thumbnail" alt="A whale" src={sighting.photoUrl} />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div></div>
      <h1 className="py-3">Approved Sightings</h1>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Sighting ID</th>
              <th>DateTime</th>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>Description</th>
              <th>Species Name</th>
              <th>Photo</th>
            </tr>
          </thead>
          <tbody>
            {approvedSightings &&
              approvedSightings?.sightings.map((sighting, index) => (
                <tr key={index}>
                  <td>
                    <Link to={`/sightings/${sighting.id}`}>{sighting.id}</Link>
                  </td>
                  <td>{formatDate(sighting.dateTime)}</td>
                  <td>{sighting.latitude}</td>
                  <td>{sighting.longitude}</td>
                  <td>{sighting.description}</td>
                  <td>{sighting.speciesName}</td>
                  <td>
                    <img className="img-thumbnail custom-thumbnail" alt="A whale" src={sighting.photoUrl} />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
