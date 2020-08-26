import React from "react"
import WordCloud from "./wordCloud"

const SkillList = ({ skillCats }) => {
  return skillCats.map(cat => (
    <div>
      <h3>{cat.category}</h3>
      <WordCloud entries={cat.skills} />
    </div>
  ))
}

export default SkillList
