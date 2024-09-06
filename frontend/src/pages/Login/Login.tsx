import "./Login.scss"
import { FormEvent, useState, useContext } from "react"
import { LoginContext } from "../../Components/LoginManager/LoginManager"
import { loginUser } from "../../api/backendClient"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const { logIn, saveUsernameToContext, savePasswordToContext, saveJwtToContext } = useContext(LoginContext)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [, setJwt] = useState("")
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
        setJwt(data.token)
        saveJwtToContext(data.token)
        saveUsernameToContext(username)
        savePasswordToContext(password)
        logIn()
        navigate("/")
      })
      .catch((error) => {
        setError(error.message)
      })
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
