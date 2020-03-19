import React, { useState } from "react"

const Tabs = ({ defaultIndex, children }) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex)

  let tabs = children.map((child, index) => {
    const activeStyles = activeIndex === index ? "active-btn" : ""
    return (
      <button
        className={`tab-btn ${activeStyles}`}
        onClick={() => setActiveIndex(index)}
      >
        hello
      </button>
    )
  })

  return (
    <>
      <div>{tabs}</div>
      {children[activeIndex]}
    </>
  )
}

export default Tabs
