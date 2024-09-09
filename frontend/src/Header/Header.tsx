import "./Header.scss"
import "../App.scss"
import NavigationLinks from "../NavigationLinks/NavigationLinks"

const Header: React.FC = () => {
  const logo = require("../images/Whale3logo.png")

  return (
    <div className="show-header">
      <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Whale Whale Whale logo" width="200" />
          </a>
          <NavigationLinks />
        </div>
      </nav>
    </div>
  )
}

export default Header
