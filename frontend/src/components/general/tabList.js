import React, { useState } from "react"

const TabList = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0)
  const headlines = children.map((child, index) => (
    <li>
      <button onClick={() => setActiveTab(index)}>{child.props.title}</button>
    </li>
  ))

  // render active elements
  return (
    <React.Fragment>
      <ul>{headlines}</ul>
      {children[activeTab]}
    </React.Fragment>
  )
}

export default TabList
