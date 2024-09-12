import "./Login.scss"
import { FormEvent, useState, useContext } from "react"
import { LoginContext } from "../../Components/LoginManager/LoginManager"
import { loginUser } from "../../api/backendClient"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const { logIn, saveUsernameToContext, savePasswordToContext, saveJwtToContext, saveRoleTypeToContext } =
    useContext(LoginContext)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  function tryLogin(event: FormEvent) {
    event.preventDefault()
    loginUser(username, password)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Incorrect username and/or password.")
        }
        return response.json()
      })
      .then((data) => {
        saveJwtToContext(data.token)
        saveUsernameToContext(username)
        savePasswordToContext(password)
        saveRoleTypeToContext(data.roleType)
        logIn()
        navigate("/")
      })
      .catch((error) => {
        setError(error.message)
      })
  }

  return (
    <div>
      <h1 className="title">Log in</h1>
      <form className="login-form" onSubmit={tryLogin}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="form-group row">
          <label htmlFor="username" className="col-sm-2 col-form-label">
            Username
          </label>
          <div className="col-sm-3">
            <input
              id="username"
              className="form-input"
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
              className="form-input"
              type={"password"}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
        </div>

        <div className="form-group row">
          <div className="col-sm-10">
            <button className="btn btn-outline-success px-4" style={{ width: "200px" }} type="submit">
              Log in
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login
