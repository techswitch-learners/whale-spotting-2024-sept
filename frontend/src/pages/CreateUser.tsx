import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import { registerUser } from "../api/backendClient"

export function CreateUser(): JSX.Element {
  const [firstname, setFirstName] = useState("")
  const [lastname, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [aboutme, setAboutMe] = useState("")
  const [error, setError] = useState<{ [key: string]: string[] }>({})

  const navigate = useNavigate()

  function tryRegister(event: FormEvent) {
    event.preventDefault()
    registerUser(firstname, lastname, email, username, password, aboutme)
      .then((response) => {
        if (!response.ok) {
          return response.json().then((errorData) => {
            setError(errorData.errors)
            throw new Error()
          })
        }
        return response.json()
      })
      .then((data) => {
        navigate("/")
      })
      .catch((error) => {})
  }

  let errorLines: string[] = []

  for (const item of Object.values(error)) {
    errorLines = errorLines.concat(item)
  }

  const errorList = errorLines.map((errorLine) => <p style={{ color: "red" }}>{errorLine}</p>)

  return (
    <div className="sign-up-page">
      <h1 className="title">Sign up</h1>
      <form className="createUser-form" onSubmit={tryRegister}>
        <div className="form-group row">
          <label htmlFor="firstName" className="col-sm-2 col-form-label">
            First Name
          </label>
          <div className="col-sm-3">
            <input
              id="firstName"
              className="form-control"
              type={"text"}
              value={firstname}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="lastName" className="col-sm-2 col-form-label">
            Last Name
          </label>
          <div className="col-sm-3">
            <input
              id="lastName"
              className="form-control"
              type={"text"}
              value={lastname}
              onChange={(event) => setLastName(event.target.value)}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="email" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-3">
            <input
              id="email"
              className="form-control"
              type={"text"}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="username" className="col-sm-2 col-form-label">
            Username
          </label>
          <div className="col-sm-3">
            <input
              id="username"
              className="form-control"
              type={"text"}
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="password" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-3">
            <input
              id="password"
              className="form-control"
              type={"password"}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="aboutMe" className="col-sm-2 col-form-label">
            About Me
          </label>
          <div className="col-sm-3">
            <textarea
              id="aboutMe"
              className="form-control"
              value={aboutme}
              onChange={(event) => setAboutMe(event.target.value)}
            ></textarea>
          </div>
        </div>

        <div className="form-group row">
          <div className="col-sm-10">
            <button className="btn btn-outline-success px-4" style={{ width: "200px" }} onClick={tryRegister}>
              Sign up
            </button>
          </div>
        </div>
        {error && errorList}
      </form>
    </div>
  )
}
