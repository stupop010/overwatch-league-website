import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import "./contactUsStyles.scss"

const ContactUs = () => {
  const { contactPic } = useStaticQuery(graphql`
    query {
      contactPic: file(relativePath: { eq: "contact-pic.jpeg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const pic = contactPic.childImageSharp.fluid

  return (
    <section className="contact-container" id="contact">
      <BackgroundImage
        Tag="section"
        className="contact"
        fluid={pic}
        backgroundColor={`#040e18`}
      >
        <form>
          <h2>Contact</h2>
          <div className="title-underline"></div>
          <div className="input-container">
            <div>
              <input />
              <input />
              <input />
            </div>
            <div>
              <textarea />
            </div>
          </div>
        </form>
      </BackgroundImage>
    </section>
  )
}

export default ContactUs
