import React from "react"
import "./Menu.scss"
import NavItems from "../NavItems/NavItems"

const Menu: React.FC = () => {
  return (
    <div>
      <h1>Menu</h1>
      <nav>
        <NavItems />
      </nav>
    </div>
  )
}

export default Menu
