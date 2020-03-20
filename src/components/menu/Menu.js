import React from "react"

import "./menuStyles.scss"

const Menu = ({ open, setOpen }) => {
  return (
    <div
      className="menu"
      style={{ transform: open ? "translateX(0)" : "translateX(-100%)" }}
    >
      <p>s3223rhfjddeuhbfdjvncfiuhejd</p>
    </div>
  )
}

export default Menu
