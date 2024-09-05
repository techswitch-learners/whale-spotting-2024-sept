import "./Login.scss"
import { FormEvent, useState, useContext } from "react"
import { LoginContext } from "../../Components/LoginManager/LoginManager"
import { loginUser } from "../../api/backendClient"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const loginContext = useContext(LoginContext)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [jwt, setJwt] = useState("")
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  function tryLogin(event: FormEvent) {
    event.preventDefault()
    loginUser(username, password)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Login failed")
        }
        return response.json()
      })
      .then((data) => {
        setJwt(data.token)
      })
      .catch((error) => {
        setError(error.message)
      })
    loginContext.logIn()
    loginContext.saveJwtToContext(jwt)
    loginContext.saveUsernameToContext(username)
    loginContext.savePasswordToContext(password)
    navigate("/")
  }

  return (
    <div className="mx-auto container">
      <h1 className="title">Log In</h1>
      <form className="login-form" onSubmit={tryLogin}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <label className="form-label">
          Username
          <input
            className="form-input"
            type={"text"}
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>

        <label className="form-label">
          Password
          <input
            className="form-input"
            type={"password"}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>

        <button className="submit-button" type="submit">
          Log In
        </button>
      </form>
    </div>
  )
}

export default Login
