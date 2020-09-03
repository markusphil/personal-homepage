import React from "react"

import { Row } from "../styled/general"
import ProjectCard from "./projectCard"

const ProjectCardRow = ({ entries }) => (
  <Row alignItems="stretch" margin>
    {entries.map((e, i) => (
      <ProjectCard {...e} key={i} />
    ))}
  </Row>
)

export default ProjectCardRow
