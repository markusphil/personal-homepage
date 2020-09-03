import React from "react"

const SkillList = ({ entries }) =>
  entries.map((e, i) => <li key={i}>{e.descr}</li>)

export default SkillList
