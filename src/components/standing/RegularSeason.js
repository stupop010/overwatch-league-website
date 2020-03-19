import React from "react"
import Img from "gatsby-image"

import StandingTableHead from "./StandingTableHead"

import useWindowDimensions from "../../hooks/useWindowDimensions"
import "./standingStyles.scss"

const RegularSeason = ({ teams, logos }) => {
  const { width } = useWindowDimensions()

  const diffStyle = diff => {
    if (diff > 0) return "pl-1 pos"
    if (diff < 0) return "pl-1 neg"
    return "pl-1"
  }

  const teamsRows = teams.map(team => {
    return (
      <div className="standing-table-row table-row">
        <div>{team.rank}</div>
        <div className="team-logo">
          <span>
            <Img fluid={logos[team.image].fluid} className="logo" />
          </span>
          {width > "900" ? team.name : team.nick}
        </div>
        <div className="op-6">{team.conf}</div>
        <div className="op-6 pl-1">{team.div}</div>
        <div>{team.w}</div>
        <div>{team.l}</div>
        <div>{team.mp}</div>
        <div>{team.w_l_t}</div>
        <div className={diffStyle(team.diff)}>{team.diff}</div>
      </div>
    )
  })
  return (
    <div>
      <div className="regular-season">
        <StandingTableHead />
        {teamsRows}
      </div>
    </div>
  )
}

export default RegularSeason
