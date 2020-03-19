import React from "react"

import TeamRow from "./TeamRow"
import StandingTableHead from "./StandingTableHead"

import "./standingStyles.scss"

const RegularSeason = ({ teams, logos }) => {
  return (
    <div>
      <div className="standing-table">
        <StandingTableHead />
        <TeamRow teams={teams} logos={logos} />
      </div>
    </div>
  )
}

export default RegularSeason
