import React from "react"
import { Link } from "gatsby"

import "./menuStyles.scss"

const Menu = ({ open, setOpen }) => {
  return (
    <div
      className="menu"
      style={{ transform: open ? "translateX(0)" : "translateX(-100%)" }}
    >
      <ul>
        <li>
          <Link to="#home" onClick={() => setOpen(!open)}>
            home
          </Link>
        </li>
        <li>
          <Link to="#about" onClick={() => setOpen(!open)}>
            about
          </Link>
        </li>
        <li>
          <Link to="#teams" onClick={() => setOpen(!open)}>
            teams
          </Link>
        </li>
        <li>
          <Link to="#standing" onClick={() => setOpen(!open)}>
            standing
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu
