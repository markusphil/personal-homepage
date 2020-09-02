import React, { useState } from "react"
import styled from "styled-components"
import { colors, fontSizes } from "../styled/variables"

const TabNav = styled.ul`
  padding: 0;
  padding-right: 1rem;
  margin: 0;
  margin-left: -0.5rem;
  display: flex;
`
const TabNavItem = styled.li`
  list-style: none;

  button {
    background: none;
    border: none;
    color: ${props =>
      props.index === props.activeTab ? colors.TEXT : colors.TEXT_LIGHTER};
    padding: 0.5rem;
    font-size: ${fontSizes.H3};
    font-weight: 100;
    outline: none;
    transiton: all 0.3s ease;

    &:focused {
      outline: none;
    }

    &:hover {
      color: ${colors.TEXT_LIGHT};
    }
  }
`

const TabList = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0)
  const headlines = children.map((child, index) => (
    <TabNavItem index={index} key={index} activeTab={activeTab}>
      <button onClick={() => setActiveTab(index)}>{child.props.title}</button>
    </TabNavItem>
  ))

  // render active elements
  return (
    <React.Fragment>
      <TabNav>{headlines}</TabNav>
      {children[activeTab]}
    </React.Fragment>
  )
}

export default TabList
