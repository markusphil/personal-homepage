import React from "react"
import styled from "styled-components"
import { fontSizes } from "../../styled/variables"

const StyledTimeLineEntry = styled.li`
  list-style: none;
  display: flex;
  position: relative;

  &:not(:last-child)::after {
    content: "";
    height: calc(100% - 3rem);
    width: 1px;
    background-color: white;
    position: absolute;
    left: 2rem;
    bottom: 1rem;
  }
`
const Bullet = styled.div`
  display: flex;
  align-items: flex-start;
  justifiy-content: center;
  margin-right: 2rem;
  flex: 0 0 4rem;
  text-align: center;

  span {
    width: 100%;
  }
`
const Text = styled.div`
  h4 {
    font-size: ${fontSizes.P};
    font-weigth: normal;
    margin: 0 0 0.5rem 0;
  }
  p:not(:last-child) {
    margin: 0;
  }
`

const TimeLineEntry = ({ start, title, desc, url }) => {
  const descriptionHtml = desc.split("\n").map((d, i) => <p key={i}>{d}</p>)
  return (
    <StyledTimeLineEntry>
      <Bullet>
        <span>{start}</span>
      </Bullet>
      <Text>
        <h4>
          {url ? (
            <a
              href={url}
              title={title}
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
            </a>
          ) : (
            title
          )}
        </h4>
        {descriptionHtml}
      </Text>
    </StyledTimeLineEntry>
  )
}

export default TimeLineEntry
