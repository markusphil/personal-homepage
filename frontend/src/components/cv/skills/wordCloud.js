import React from "react"
import styled from "styled-components"
import { colors, fontSizes } from "../../styled/variables"

const WordCloudContainer = styled.div`
  margin-bottom: 2rem;
`

const RatingText = styled.span(props => {
  let color = colors.TEXT_LIGHTER
  let size = "1rem"
  let fontWeight = "100"

  if (props.rating > 3) color = colors.TEXT_LIGHT
  if (props.rating > 4) size = "1.2rem"
  if (props.rating > 5) color = color.TEXT
  if (props.rating > 6) size = "1.4rem"
  if (props.rating > 8) size = fontSizes.H3

  return `
      color: ${color};
      font-size: ${size};
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
