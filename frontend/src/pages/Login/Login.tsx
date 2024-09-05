import "./Login.scss"
import { FormEvent, useState } from "react"

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  function tryLogin(event: FormEvent) {
    event.preventDefault()
    // call endpoint
    // JWT tokens?
  }

  return (
    <div>
      <h1 className="title">Log In</h1>
      <form className="login-form" onSubmit={tryLogin}>
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
