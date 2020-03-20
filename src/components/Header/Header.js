import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import useWindowDimensions from "../../hooks/useWindowDimensions"

import "./headerStyles.scss"
import Burger from "../burger"

const Header = ({ siteTitle, open, setOpen }) => {
  const { width } = useWindowDimensions()
  return (
    <header className="header">
      <div className="site-title">{siteTitle}</div>
      {width > 660 ? (
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
      ) : (
        <Burger open={open} setOpen={setOpen} />
      )}
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
