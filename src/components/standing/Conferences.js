import React from "react"
import StandingTableHead from "./StandingTableHead"
import TeamRow from "./TeamRow"

import "./standingStyles.scss"

const Conferences = ({ teams, logos }) => {
  const alt = []
  const pac = []

  teams.map(team => {
    if (team.conf === "atl") {
      alt.push(team)
    } else {
      pac.push(team)
    }
  })

  return (
    <div>
      <div className="standing-table">
        <div className="conference-table">
          <div>
            <h2>ATLANTIC CONFERENCE</h2>
            <StandingTableHead />
            <TeamRow teams={alt} logos={logos} />
          </div>
          <div>
            <h2>PACIFIC CONFERENCE</h2>
            <StandingTableHead />
            <TeamRow teams={pac} logos={logos} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Conferences
