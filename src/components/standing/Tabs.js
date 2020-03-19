import React, { useState } from "react"

const Tabs = ({ defaultIndex, children }) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex)

  let tabs = children.map((child, index) => {
    const activeStyles = activeIndex === index ? "active-btn" : ""
    return (
      <button
        className={`btn ${activeStyles}`}
        onClick={() => setActiveIndex(index)}
      >
        {child.props.label}
      </button>
    )
  })

  return (
    <>
      <div className="tab-btn">{tabs}</div>
      {children[activeIndex]}
    </>
  )
}

export default Tabs
