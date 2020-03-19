import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeHero from "../components/homeHero"
import AboutUs from "../components/aboutUs"
import MeetTeams from "../components/meetTeams"
import Standing from "../components/standing"
import ContactUs from "../components/contactUs"

const IndexPage = () => {
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
    logos[item.node.base.split(".")[0]] = item.node.childImageSharp
  })

  return (
    <Layout>
      <SEO title="Home" />
      <HomeHero />
      <AboutUs />
      <MeetTeams logos={logos} />
      <Standing logos={logos} />
      <ContactUs />
    </Layout>
  )
}

export default IndexPage
