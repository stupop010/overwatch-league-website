import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./headerStyles.scss"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="site-title">{siteTitle}</div>
    <ul>
      <li>
        <Link to="#home">home</Link>
      </li>
      <li>
        <Link to="#about">about</Link>
      </li>
      <li>
        <Link to="#teams">teams</Link>
      </li>
      <li>
        <Link to="#standing">standing</Link>
      </li>
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
