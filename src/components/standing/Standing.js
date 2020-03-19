import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import RegularSeason from "./RegularSeason"
import Conferences from "./Conferences"
import Tabs from "./Tabs"

import "./standingStyles.scss"
import { compare } from "../../utils/compareRackTeams"

const Tab = ({ children }) => <div className="tab-container">{children}</div>

const Standing = ({ logos }) => {
  const { allTeamsDataJson } = useStaticQuery(graphql`
    query MyQuery {
      allTeamsDataJson {
        edges {
          node {
            nick
            conf
            diff
            div
            id
            image
            l
            mp
            name
            rank
            w
            w_l_t
          }
        }
      }
    }
  `)

  const teams = []
  allTeamsDataJson.edges.map(({ node }) => teams.push(node))

  teams.sort(compare)

  return (
    <section id="standing" className="standing">
      <div className="standing-title">
        <h2>Standing</h2>
        <div />
      </div>
      <Tabs defaultIndex={0}>
        <Tab label="regular season">
          <RegularSeason teams={teams} logos={logos} />
        </Tab>
        <Tab label="conferences">
          <Conferences teams={teams} logos={logos} />
        </Tab>
      </Tabs>
    </section>
  )
}

export default Standing
