import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
export function CreateUser(): JSX.Element {
  const [firstname, setFirstName] = useState("")
  const [lastname, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [aboutMe, setAboutMe] = useState("")

  const navigate = useNavigate()

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    navigate("/")
  }

  return (
    <>
      <h1 className="title">Register</h1>
      <form className="createUser-form" onSubmit={handleSubmit}>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">First Name</label>
          <div className="col-sm-3">
            <input
              className="form-control"
              type={"text"}
              value={firstname}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Last Name</label>
          <div className="col-sm-3">
            <input
              className="form-control"
              type={"text"}
              value={lastname}
              onChange={(event) => setLastName(event.target.value)}
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-3">
            <input
              className="form-control"
              type={"text"}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Username</label>
          <div className="col-sm-3">
            <input
              className="form-control"
              type={"text"}
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
        </div>

        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-3">
            <input
              className="form-control"
              type={"password"}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
        </div>

        <div className="form-group row">
          <label className="col-sm-2 col-form-label">About Me</label>
          <div className="col-sm-3">
            <textarea
              className="form-control"
              value={aboutMe}
              onChange={(event) => setAboutMe(event.target.value)}
            ></textarea>
          </div>
        </div>

        <div className="form-group row">
          <div className="col-sm-10">
            <button className="btn btn-primary" type="submit">
              Register
            </button>
          </div>
        </div>
      </form>
    </>
  )
}
