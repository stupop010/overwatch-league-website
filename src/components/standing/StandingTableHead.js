import React from "react"

import "./standingStyles.scss"
import "../utils.scss"

const StandingTableHead = () => (
  <div className="standing-table-row bg-black c-white">
    <div>rank</div>
    <div>team</div>
    <div>conf</div>
    <div className="pl-1">div</div>
    <div>w</div>
    <div>l</div>
    <div>mp</div>
    <div>map w-l-t</div>
    <div className="pl-1">diff</div>
  </div>
)

export default StandingTableHead
