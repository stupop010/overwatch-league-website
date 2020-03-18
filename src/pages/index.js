import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import HomeHero from "../components/homeHero"
import AboutUs from "../components/aboutUs"
import MeetTeams from "../components/meetTeams"
import Standing from "../components/standing"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHero />
    <AboutUs />
    <MeetTeams />
    <Standing />
  </Layout>
)

export default IndexPage
