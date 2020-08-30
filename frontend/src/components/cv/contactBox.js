import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"
import { borders } from "../styled/variables"

const StyledContactBox = styled.ul`
  padding: 0.5rem;
  margin: 0;
  ${borders.BORDER};

  li {
    list-style: none;
  }

  li:not(:last-child) {
    margin-bottom: 0.25rem;
  }

  a span {
    margin-left: 0.5rem;
  }
`

const ContactBox = ({ entries }) => {
  const content = entries.map(({ icon, name, url }) => (
    <li key={name}>
      <a href={url} title={name} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={icon} />
        <span>{name}</span>
      </a>
    </li>
  ))

  return <StyledContactBox>{content}</StyledContactBox>
}

export default ContactBox
