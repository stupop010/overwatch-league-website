import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import useForm from "../../hooks/useForm"

import "./contactUsStyles.scss"

const ContactUs = () => {
  const { inputs, handleSubmit, handleInputChange } = useForm({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

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
        <form onSubmit={handleSubmit}>
          <h2>Contact</h2>
          <div className="title-underline"></div>
          <div className="input-container">
            <div className="input-left">
              <input
                type="text"
                placeholder="Name"
                name="name"
                onChange={handleInputChange}
                value={inputs.name}
                className="form-input"
              />
              <input
                placeholder="Email"
                type="email"
                name="email"
                onChange={handleInputChange}
                value={inputs.email}
                className="form-input"
              />
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                onChange={handleInputChange}
                value={inputs.subject}
                className="form-input"
              />
            </div>
            <div className="input-left">
              <textarea
                type="text"
                placeholder="Message"
                name="message"
                onChange={handleInputChange}
                value={inputs.message}
                className="form-input"
              />
            </div>
          </div>
          <button type="submit" className="form-btn">
            Submit
          </button>
        </form>
      </BackgroundImage>
    </section>
  )
}

export default ContactUs
