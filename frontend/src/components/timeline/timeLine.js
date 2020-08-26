import React from "react"
import TimeLineEntry from "./timeLineEntry"

const TimeLine = ({ title, entries }) => {
  const tlEntries = entries.map(entry => <TimeLineEntry {...entry} />)

  return (
    <div className="time-line-wrapper">
      <h3>{title}</h3>
      <ul className="time-line-list">{tlEntries}</ul>
    </div>
  )
}

export default TimeLine
