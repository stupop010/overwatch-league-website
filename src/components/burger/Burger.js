import React from "react"

import "./burgerStyles.scss"

const Burger = ({ open, setOpen }) => {
  return (
    <button className="hamburger" onClick={() => setOpen(!open)}>
      <div style={{ transform: open ? "rotate(45deg" : "rotate(0)" }} />
      <div
        style={{
          opacity: open ? "0" : "1",
          transform: open ? "translateX(20px)" : "translateX(0)",
        }}
      />
      <div style={{ transform: open ? "rotate(-45deg" : "rotate(0)" }} />
    </button>
  )
}

export default Burger
