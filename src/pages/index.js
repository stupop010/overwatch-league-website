import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import HomeHero from "../components/homeHero"
import AboutUs from "../components/aboutUs"
import MeetTeams from "../components/meetTeams"
import Standing from "../components/standing"
import ContactUs from "../components/contactUs"
import Menu from "../components/menu"

const IndexPage = () => {
  const [open, setOpen] = useState(false)

  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "teamsLogo" } }) {
        edges {
          node {
            childImageSharp {
              fluid {
                src
                srcSet
                base64
                aspectRatio
                sizes
              }
            }
            base
          }
        }
      }
    }
  `)

  let logos = {}

  allFile.edges.map(item => {
    return (logos[item.node.base.split(".")[0]] = item.node.childImageSharp)
  })

  return (
    <Layout open={open} setOpen={setOpen}>
      <SEO title="Home" />
      <Menu open={open} setOpen={setOpen} />
      <HomeHero />
      <AboutUs />
      <MeetTeams logos={logos} />
      <Standing logos={logos} />
      <ContactUs />
    </Layout>
  )
}

export default IndexPage
