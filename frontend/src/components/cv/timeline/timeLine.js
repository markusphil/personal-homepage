import React from "react"
import styled from "styled-components"
import TimeLineEntry from "./timeLineEntry"

const TimeLineList = styled.div`
  padding: 0 1rem 0 0;
  margin: 2rem 0;
`
const Hint = styled.p`
  padding: 0 2rem 0.5rem 6rem;
  font-size: 0.8rem;
`

const TimeLine = ({ entries, hint }) => {
  const tlEntries = entries.map((entry, i) => (
    <TimeLineEntry key={i} {...entry} />
  ))

  return (
    <React.Fragment>
      <TimeLineList>{tlEntries}</TimeLineList>
      <Hint>{hint}</Hint>
    </React.Fragment>
  )
}

export default TimeLine
