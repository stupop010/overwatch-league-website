import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Tabs from "./Tabs"

import "./standingStyles.scss"
import compare from "../../utils/compareRackTeams"

const Standing = () => {
  const { allTeamsDataJson } = useStaticQuery(graphql`
    query MyQuery {
      allTeamsDataJson {
        edges {
          node {
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
      hell
      <Tabs defaultIndex={0}>
        <Tab>
          <p>hello</p>
        </Tab>
        <Tab>
          <p>hello s</p>
        </Tab>
      </Tabs>
    </section>
  )
}

export default Standing

const Tab = ({ children }) => <div>{children}</div>
