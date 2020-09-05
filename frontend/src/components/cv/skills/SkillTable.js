import React from "react"
import { Row, Col } from "../../styled/general"
import styled from "styled-components"

const TableCell = styled.div`
  margin-bottom: 0.25rem;
`

const SkillTable = ({ entries }) =>
  entries.map((e, i) => (
    <Row key={i}>
      <Col width="25%">
        <TableCell>{e.title}</TableCell>
      </Col>
      <Col width="60%">
        <TableCell>{e.descr}</TableCell>
      </Col>
    </Row>
  ))

export default SkillTable
