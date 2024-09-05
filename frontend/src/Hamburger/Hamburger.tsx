import React, { useState } from "react"
import "./Hamburger.scss" // styling for the hmauburger button icon

import Menu from "../Menu/Menu"
import { menuItems } from "../Menu/MenuItems"

const Hamburger: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
    ;<Menu items={menuItems} />
  }
  return (
    <div className="show-hamburger">
      <button onClick={handleClick} className="hamburger" data-testid="toggle-button">
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </button>

      {isOpen && (
        <div className="menu" data-testid="menu">
          <Menu items={menuItems} />
        </div>
      )}
    </div>
  )
}

export default Hamburger
