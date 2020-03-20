import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./layoutStyles.scss"
import Header from "../header"
import HomeLink from "./HomeLink"

const Layout = ({ children, open, setOpen }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        open={open}
        setOpen={setOpen}
      />
      <div>
        <HomeLink />
        <main>{children}</main>
        <footer className="footer">
          © {new Date().getFullYear()}, By Stuart Doney
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
