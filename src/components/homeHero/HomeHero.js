import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import "./homeHeroStyles.scss"

const HomeHero = () => {
  const data = useStaticQuery(graphql`
    query {
      heroOne: file(relativePath: { eq: "heroOne.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      heroTwo: file(relativePath: { eq: "heroTwo.jpeg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      heroThree: file(relativePath: { eq: "heroThree.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const heroOne = data.heroOne.childImageSharp.fluid
  const heroTwo = data.heroTwo.childImageSharp.fluid
  const heroThree = data.heroThree.childImageSharp.fluid
  const heroPicSet = [heroOne, heroTwo, heroThree]

  const previousSlide = () => {
    const lastIndex = heroPicSet.length - 1
    const shouldResetIndex = currentImageIndex === 0
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1

    setCurrentImageIndex(index)
  }

  const nextSlide = () => {
    const lastIndex = heroPicSet.length - 1
    const shouldResetIndex = currentImageIndex === lastIndex
    const index = shouldResetIndex ? 0 : currentImageIndex + 1

    setCurrentImageIndex(index)
  }

  return (
    <section className="hero">
      {/* <Img fluid={heroPicSet[currentImageIndex]}></Img> */}
      <BackgroundImage
        Tag="section"
        className="hero-pic"
        fluid={heroPicSet[currentImageIndex]}
        backgroundColor={`#040e18`}
      >
        <button className="hero-nav-btn" onClick={previousSlide}>
          Previous
        </button>
        <button className="hero-nav-btn" onClick={nextSlide}>
          Next
        </button>
      </BackgroundImage>
    </section>
  )
}

export default HomeHero
