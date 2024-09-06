import "./Header.scss"
import { useNavigate } from "react-router-dom"

const Header: React.FC = () => {
  const logo = require("../../images/Whale3logo.png")

  const navigate = useNavigate()

  const handleClickSignUp = () => {
    navigate("/signup")
  }

  const handleClickLogIn = () => {
    navigate("/login")
  }

  return (
    <nav className="navbar navbar-expand-lg custom-navbar container-fluid">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Whale Whale Whale logo" width="200" />
        </a>

        <ul className="navbar-nav mb-2 mb-lg-0 d-flex w-100 justify-content-around">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/explore">
              Explore
            </a>
          </li>
        </ul>
        <button
          className="btn btn-outline-success px-3"
          style={{ width: "120px", marginRight: "10px" }}
          onClick={handleClickSignUp}
        >
          Sign up
        </button>
        <button
          className="btn btn-outline-success px-3"
          style={{ width: "120px", marginRight: "10px" }}
          onClick={handleClickLogIn}
        >
          Log in
        </button>
      </div>
    </nav>
  )
}

export default Header
