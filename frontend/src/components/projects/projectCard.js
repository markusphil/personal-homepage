import React from "react"
import styled from "styled-components"
import { Col } from "../styled/general"
import { colors, fontSizes } from "../styled/variables"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ProjectLink = styled.a`
  display: block;
  text-decoration: none;
  color: ${colors.TEXT};
  cursor: pointer;
  //height: calc(100% - 2rem);
  //padding: 1rem;
  margin: 0 1.5rem 2rem 1.5rem;
  transition: all 0.3s ease;
  &:hover {
    h3,
    p {
      color: ${colors.TEXT_LIGHT};
    }
  }
  &:visited {
    color: ${colors.TEXT};
  }
  svg {
    margin-left: 0.25rem;
    margin-bottom: 0.25rem;
  }
  h3 {
    display: flex;
    justify-content: space-between;
    font-size: ${fontSizes.P};
    font-weight: normal;
    margin: 0 0 0.5rem 0;
  }
`

const ProjectCard = ({ title, descr, url }) => (
  <Col widthMd="33%">
    <ProjectLink href={url} target="_blank" rel="noopener noreferrer">
      <h3>
        {title}{" "}
        <FontAwesomeIcon icon={["fas", "external-link-alt"]} size="xs" />
      </h3>
      <p>{descr}</p>
    </ProjectLink>
  </Col>
)

export default ProjectCard
