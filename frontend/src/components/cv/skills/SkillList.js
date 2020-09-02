import React from "react"

const SkillList = ({ entries }) => entries.map(e => <li>{e.descr}</li>)

export default SkillList
