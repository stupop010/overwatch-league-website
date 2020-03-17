import React, { useState, useEffect, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons"
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
  const [carouselInterval, setCarouselInterval] = useState("")

  const heroOne = data.heroOne.childImageSharp.fluid
  const heroTwo = data.heroTwo.childImageSharp.fluid
  const heroThree = data.heroThree.childImageSharp.fluid
  const heroPicSet = [heroOne, heroTwo, heroThree]

  useEffect(() => {
    const id = setTimeout(() => nextSlide(), 4000)
    setCarouselInterval(id)
    return () => clearTimeout(carouselInterval)
  }, [currentImageIndex])

  const previousSlide = () => {
    const lastIndex = heroPicSet.length - 1
    const shouldResetIndex = currentImageIndex === 0
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1

    setCurrentImageIndex(index)
    clearTimeout(carouselInterval)
  }

  const nextSlide = () => {
    const lastIndex = heroPicSet.length - 1
    const shouldResetIndex = currentImageIndex === lastIndex
    const index = shouldResetIndex ? 0 : currentImageIndex + 1

    setCurrentImageIndex(index)
    clearTimeout(carouselInterval)
  }

  return (
    <section className="hero" id="home">
      <BackgroundImage
        Tag="section"
        className="hero-pic"
        fluid={heroPicSet[currentImageIndex]}
        backgroundColor={`#040e18`}
      >
        <button className="hero-nav-btn left" onClick={previousSlide}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className="hero-nav-btn right" onClick={nextSlide}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </BackgroundImage>
    </section>
  )
}

export default HomeHero
