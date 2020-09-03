import React from "react"
import styled from "styled-components"
import SkillList from "./SkillList"
import SkillTable from "./SkillTable"
import { List } from "../../styled/general"

const Wrapper = styled.div`
  padding: 0 2rem 0rem 6rem;
  margin: 2rem 0;
`

const SkillCmpFactory = content => {
  switch (content.type) {
    case "table":
      return <SkillTable entries={content.entries} />
    case "list":
      return (
        <List>
          <SkillList entries={content.entries} />
        </List>
      )
    default:
      return null
  }
}

const SkillSection = ({ content }) => {
  return content.map((c, i) => (
    <Wrapper key={i}>
      <h4>{c.headline}</h4>
      {SkillCmpFactory(c)}
    </Wrapper>
  ))
}

export default SkillSection
