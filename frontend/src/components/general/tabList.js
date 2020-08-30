import React, { useState } from "react"

// TODO: use styledComonents ?

const TabList = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0)
  const headlines = children.map((child, index) => (
    <li
      key={index}
      style={{
        listStyle: "none",
      }}
    >
      <button
        style={{
          background: "none",
          border: "none",
          color: index === activeTab ? "white" : "lightgray",
        }}
        onClick={() => setActiveTab(index)}
      >
        {child.props.title}
      </button>
    </li>
  ))

  // render active elements
  return (
    <React.Fragment>
      <ul style={{ display: "flex" }}>{headlines}</ul>
      {children[activeTab]}
    </React.Fragment>
  )
}

export default TabList
