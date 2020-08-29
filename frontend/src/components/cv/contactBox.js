import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ContactBox = ({ entries }) => {
  const content = entries.map(({ icon, name, url }) => (
    <li key={name}>
      <a href={url} title={name} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={icon} />
        <span>{name}</span>
      </a>
    </li>
  ))

  return (
    <div style={{ border: `1px solid white` }}>
      <ul>{content}</ul>
    </div>
  )
}

export default ContactBox
