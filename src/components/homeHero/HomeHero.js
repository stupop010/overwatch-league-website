import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons"

import HeroOne from "../../images/heroOne.jpg"
import HeroTwo from "../../images/heroTwo.jpeg"
import HeroThree from "../../images/heroThree.jpg"

import "./homeHeroStyles.scss"

const HomeHero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [carouselInterval, setCarouselInterval] = useState("")

  const heroPicSet = [HeroOne, HeroTwo, HeroThree]

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
      <div
        Tag="section"
        className="hero-pic"
        style={{ backgroundImage: `url('${heroPicSet[currentImageIndex]}')` }}
      >
        <button className="hero-nav-btn left" onClick={previousSlide}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className="hero-nav-btn right" onClick={nextSlide}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </section>
  )
}

export default HomeHero
