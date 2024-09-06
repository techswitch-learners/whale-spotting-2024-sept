import React from "react"
import "./Menu.scss"
import { useNavigate } from "react-router-dom"
import MenuItems from "./MenuItems"
import Hamburger from "../Hamburger/Hamburger"




const Menu: React.FC = () => {

  return (
    <div>
      {/* <button type="button" className="btn-close" aria-label="Close"></button> */}
      <h1>Menu</h1>
      <nav>
        <MenuItems />
      </nav>
    </div>
  )
}

export default Menu
