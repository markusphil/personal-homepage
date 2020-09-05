import React from "react"
import styled from "styled-components"
import { colors } from "../../styled/variables"

const WordCloudContainer = styled.div`
  margin-bottom: 2rem;
`

const RatingText = styled.span(props => {
  let color = colors.TEXT_LIGHTER
  let size = 1
  let fontWeight = "100"

  if (props.rating > 3) color = colors.TEXT_LIGHT
  if (props.rating > 4) size = 1.2
  if (props.rating > 5) color = colors.TEXT
  if (props.rating > 7) size = 1.4
  if (props.rating > 8) size = 1.5

  return `
      color: ${color};
      font-size: ${size}rem;
      line-height: ${size + 0.3}rem;
      font-weight: ${fontWeight};
  `
})

const WordCloud = ({ entries }) => {
  const words = entries.map((e, i) => (
    <RatingText key={i} rating={e.rating}>
      {e.name}
    </RatingText>
  ))
  return <WordCloudContainer>{words}</WordCloudContainer>
}

export default WordCloud
