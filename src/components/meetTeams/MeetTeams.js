import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./meetTeamsStyles.scss"

const MeetTeams = () => {
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
    <section id="teams" className="meet-teams">
      <div className="teams-content">
        <h2>Meet the Teams</h2>
        <p>Who will you root for?</p>
        <p>
          The Overwatch League is comprised of 20 international teams, each with
          their own culture, identity, and distinctive colors. With teams
          playing matches in their home cities, we’re breaking the 20 teams into
          two conferences, with two divisions in each conference
        </p>
        <table>
          <thead>
            <tr className="table-head">
              <th>ATLANTIC TEAMS</th>
              <th>PACIFIC TEAMS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="table-data">
                  <Img
                    fluid={logos.Atlanta_Reign_Logo.fluid}
                    className="team-logo"
                  />
                  Atlanta Reign
                </div>
              </td>
              <td>
                <div className="table-data">
                  <Img
                    fluid={logos.Chengdu_Hunters_Logo.fluid}
                    className="team-logo"
                  />
                  Chengdu Hunters
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="table-data">
                  <Img
                    fluid={logos.Boston_Uprising_Blue_Logo.fluid}
                    className="team-logo"
                  />
                  Boston Uprising
                </div>
              </td>
              <td>
                <div className="table-data">
                  <Img
                    fluid={logos.Dallas_Fuel_Logo.fluid}
                    className="team-logo"
                  />
                  Dallas Fuel
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="table-data">
                  <Img
                    fluid={logos.Florida_Mayhem_Logo.fluid}
                    className="team-logo"
                  />
                  Florida Mayhem
                </div>
              </td>
              <td>
                <div className="table-data">
                  <Img
                    fluid={logos.Guangzhou_Charge_Logo.fluid}
                    className="team-logo"
                  />
                  Guangzhou Charge
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="table-data">
                  <Img
                    fluid={logos.Houston_Outlaws_Logo.fluid}
                    className="team-logo"
                  />
                  Houston Outlaws
                </div>
              </td>
              <td>
                <div className="table-data">
                  <Img
                    fluid={logos.Hangzhou_Spark_Logo.fluid}
                    className="team-logo"
                  />
                  Hangzhou Spark
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="table-data">
                  <Img
                    fluid={logos.London_Spitfire_Logo.fluid}
                    className="team-logo"
                  />
                  London Spitfire
                </div>
              </td>
              <td>
                <div className="table-data">
                  <Img
                    fluid={logos.Los_Angeles_Gladiators_Logo.fluid}
                    className="team-logo"
                  />
                  Los Angeles Gladiators
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="table-data">
                  <Img
                    fluid={logos.New_York_Excelsior_Logo.fluid}
                    className="team-logo"
                  />
                  New York Excelsior
                </div>
              </td>
              <td>
                <div className="table-data">
                  <Img
                    fluid={logos.Los_Angeles_Valiant_Logo.fluid}
                    className="team-logo"
                  />
                  Los Angeles Valiant
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="table-data">
                  <Img
                    fluid={logos.Paris_Eternal_Logo.fluid}
                    className="team-logo"
                  />
                  Paris Eternal
                </div>
              </td>
              <td>
                <div className="table-data">
                  <Img
                    fluid={logos.San_Francisco_Shock_Logo.fluid}
                    className="team-logo"
                  />
                  San Francisco Shock
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="table-data">
                  <Img
                    fluid={logos.Philadelphia_Fusion_Logo.fluid}
                    className="team-logo"
                  />
                  Philadelphia Fusion
                </div>
              </td>
              <td>
                <div className="table-data">
                  <Img
                    fluid={logos.Seoul_Dynasty_Logo.fluid}
                    className="team-logo"
                  />
                  Seoul Dynasty
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="table-data">
                  <Img
                    fluid={logos.Toronto_Defiant_Logo.fluid}
                    className="team-logo"
                  />
                  Toronto Defiant
                </div>
              </td>
              <td>
                <div className="table-data">
                  <Img
                    fluid={logos.Shanghai_Dragons_Logo.fluid}
                    className="team-logo"
                  />
                  Shanghai Dragons
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="table-data">
                  <Img
                    fluid={logos.Washington_Justice_Logo.fluid}
                    className="team-logo"
                  />
                  Washington Justice
                </div>
              </td>
              <td>
                <div className="table-data">
                  <Img
                    fluid={logos.Vancouver_Titans_Logo.fluid}
                    className="team-logo"
                  />
                  Vancouver Titans
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default MeetTeams
