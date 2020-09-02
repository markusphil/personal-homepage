import React from "react"
import { Row, Col } from "../../styled/general"

const SkillTable = ({ entries }) =>
  entries.map(e => (
    <Row>
      <Col width="25%">
        <p>{e.title}</p>
      </Col>
      <Col width="75%">
        <p>{e.descr}</p>
      </Col>
    </Row>
  ))

export default SkillTable
