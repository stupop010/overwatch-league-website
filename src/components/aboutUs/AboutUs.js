import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./aboutUsStyles.scss"

const AboutUs = () => {
  const data = useStaticQuery(graphql`
    query {
      aboutOne: file(relativePath: { eq: "aboutOne.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      aboutTwo: file(relativePath: { eq: "aboutTwo.jpeg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <section id="about" className="about">
      <h2>about us</h2>
      <p>
        The Overwatch League is an international esports league comprising 20
        city-based teams, featuring the best Overwatch players on the planet.
        The 280-match regular season begins in February and concludes with
        postseason playoffs in the fall.
      </p>
      <div className="about-card">
        <div className="card">
          <h4>session format</h4>
          <div className="card-content">
            <div>
              <p>
                Each team will play 28 total regular-season matches, which
                includes two matches against each in-conference opponent and one
                match against all out-of-conference teams. The regular season
                will consist of 26 weeks—with nearly all matches played over
                weekends—and will include a break for All-Stars and a midseason
                tournament between Weeks 12 and 13.
              </p>
            </div>
            <Img
              fluid={data.aboutOne.childImageSharp.fluid}
              className="about-img"
            />
          </div>
        </div>
        <div className="card">
          <h4>PLAYOFFS &amp; GRAND FINALS</h4>
          <div className="card-content">
            <div>
              <p>
                The double-elimination bracket will feature the following eight
                teams: The two top teams per conference as the top seeds. The
                next four teams across both conferences as the three to six
                seeds. The Grand Finals will be a single-elimination match
                between the two teams advancing out of the double-elimination
                bracket.
              </p>
            </div>
            <Img
              fluid={data.aboutTwo.childImageSharp.fluid}
              className="about-img"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
