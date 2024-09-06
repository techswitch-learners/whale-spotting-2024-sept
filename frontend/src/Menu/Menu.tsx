import React from "react"
import "./Menu.scss"

interface MenuItem {
  label: string
  link: string
}

interface MenuProps {
  items: MenuItem[]
}

const Menu: React.FC<MenuProps> = ({ items }) => {
  return (
    <div>
      <h1>Menu</h1>
      <nav>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Menu
