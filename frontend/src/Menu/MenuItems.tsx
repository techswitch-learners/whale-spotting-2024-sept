import { useNavigate } from "react-router-dom"

const MenuItems: React.FC = () => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/login")
  }

  return (
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
      <button className="btn btn-outline-success px-2" style={{ width: "100px" }} onClick={handleClick}>
        Log in / Sign up
      </button>
    </ul>
  )
}

export default MenuItems