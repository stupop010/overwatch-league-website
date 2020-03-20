import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"

import "./layoutStyles.scss"

const HomeLink = () => (
  <div className="home-link">
    <div>
      <Link to="#home">
        <FontAwesomeIcon icon={faArrowUp} size="lg" />
      </Link>
    </div>
  </div>
)

export default HomeLink
