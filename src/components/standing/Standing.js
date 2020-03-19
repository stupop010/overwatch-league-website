import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import RegularSeason from "./RegularSeason"
import Tabs from "./Tabs"

import "./standingStyles.scss"
import { compare } from "../../utils/compareRackTeams"

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
      <Tabs defaultIndex={0}>
        <RegularSeason teams={teams} logos={logos} />
        <Tab>
          <p>hello s</p>
        </Tab>
      </Tabs>
    </section>
  )
}

export default Standing

const Tab = ({ children }) => <div>{children}</div>
