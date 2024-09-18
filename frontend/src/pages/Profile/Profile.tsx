import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { fetchUserProfile, User } from "../../api/backendClient"
import { LoginContext } from "../../Components/LoginManager/LoginManager"
import "./Profile.scss"

export function Profile(): JSX.Element {
  const [user, setUser] = useState<User | null>(null)
  const loginContext = useContext(LoginContext)

  const navigate = useNavigate()
  
  useEffect(() => {
    fetchUserProfile(loginContext.jwt).then((response) => setUser(response))
  }, [loginContext.jwt])
  
  const userData = { firstName: user?.firstName, lastName: user?.lastName, aboutMe: user?.aboutMe }

  const handleClick = (event: { currentTarget: { id: string }}) => {
    const buttonId = event.currentTarget.id
    switch (buttonId) {
      case "update-button":
        navigate("/updateprofile", { state: userData })
        break
      case "delete-button":
        break
      default:
        break
    }
  }

  if (!user) {
    return <section>You are not authorized to view this page</section>
  }

  return (
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
            <button id="update-button" data-testid="update-button" className="btn btn-primary btn-md w-100" onClick={handleClick}>
              Update
            </button>
          </div>
          <div className="col-6 p-2">
            <button id="delete-button" data-testid="delete-button" className="btn btn-primary btn-md w-100">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
