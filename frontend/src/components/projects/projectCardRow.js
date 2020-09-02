import React from "react"

import { Row } from "../styled/general"
import ProjectCard from "./projectCard"

const ProjectCardRow = ({ entries }) => (
  <Row alignItems="stretch">
    {entries.map(e => (
      <ProjectCard {...e} />
    ))}
  </Row>
)

export default ProjectCardRow
