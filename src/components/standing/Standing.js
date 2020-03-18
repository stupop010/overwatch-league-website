import React from "react"
import Tabs from "./Tabs"

import "./standingStyles.scss"

const Standing = () => {
  return (
    <section id="standing" className="standing">
      hell
      <Tabs defaultIndex={0}>
        <Tab>
          <p>hello</p>
        </Tab>
        <Tab>
          <p>hello s</p>
        </Tab>
      </Tabs>
    </section>
  )
}

export default Standing

const Tab = ({ children }) => <div>{children}</div>
