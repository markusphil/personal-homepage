import React from "react"
import styled from "styled-components"
import { Col } from "../styled/general"
import { colors } from "../styled/variables"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ProjectLink = styled.a`
  display: block;
  text-decoration: none;
  color: ${colors.TEXT};
  cursor: pointer;
  //height: calc(100% - 2rem);
  //padding: 1rem;
  margin: 0 3rem 2rem 0;
  transition: all 0.3s ease;
  &:hover {
    h4,
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
  h4 {
    display: flex;
    justify-content: space-between;
  }
`

const ProjectCard = ({ title, descr, url }) => (
  <Col widthMd="33%">
    <ProjectLink href={url} target="_blank">
      <h4>
        {title}{" "}
        <FontAwesomeIcon icon={["fas", "external-link-alt"]} size="xs" />
      </h4>
      <p>{descr}</p>
    </ProjectLink>
  </Col>
)

export default ProjectCard
