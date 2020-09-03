import React from "react"
import styled from "styled-components"
import { Col } from "../styled/general"
import { colors } from "../styled/variables"

const ProjectLink = styled.a`
  display: block;
  text-decoration: none;
  color: ${colors.TEXT};
  cursor: pointer;
  height: calc(100% - 2rem);
  padding: 1rem;
  transition: all .3s ease
  &:hover {
    box-shadow: 6px 7px 33px 0px rgba(0, 0, 0, 0.25);
  }
  &:visited {
    color: ${colors.TEXT};
  }
`

const ProjectCard = ({ title, descr, url }) => (
  <Col widthMd="33%">
    <ProjectLink href={url} target="_blank">
      <h4>{title}</h4>
      <p>{descr}</p>
    </ProjectLink>
  </Col>
)

export default ProjectCard
