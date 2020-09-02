import React from "react"
import WordCloud from "./wordCloud"
import { Headline3 } from "../../styled/general"

const SkillCloud = ({ title, skillCats }) => {
  const cats = skillCats.map(cat => (
    <div key={cat.category}>
      <h4>{cat.category}</h4>
      <WordCloud entries={cat.skills} />
    </div>
  ))

  return (
    <React.Fragment>
      <Headline3>{title}</Headline3>
      {cats}
    </React.Fragment>
  )
}

export default SkillCloud
