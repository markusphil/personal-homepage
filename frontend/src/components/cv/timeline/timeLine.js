import React from "react"
import TimeLineEntry from "./timeLineEntry"

const TimeLine = ({ entries }) => {
  const tlEntries = entries.map((entry, i) => (
    <TimeLineEntry key={i} {...entry} />
  ))

  return (
    <div className="time-line-wrapper">
      <ul className="time-line-list">{tlEntries}</ul>
    </div>
  )
}

export default TimeLine
