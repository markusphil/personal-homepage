import React from "react"
const TimeLineEntry = ({ start, title, desc }) => (
  <li className="tl-entry-wrapper">
    <div className="tl-entry-bullet">
      <span>{start}</span>
    </div>
    <div className="tl-entry-text">
      <h5>{title}</h5>
      <p>{desc}</p>
    </div>
  </li>
)

export default TimeLineEntry
