import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import TimeLine from "../components/cv/timeline/timeLine"
import SkillList from "../components/cv/skills/SkillList"
import TabList from "../components/general/tabList"

import { Row, Col } from "../components/styled/general"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Lebenslauf: Markus Philipp" />

    <Row>
      <Col widthMd="75%">
        <TabList>
          <TimeLine
            title={"Education"}
            entries={data.allEducationJson.edges.map(e => e.node)}
          />
          <TimeLine
            title={"Practical Experiances"}
            entries={data.allPracticalJson.edges.map(e => e.node)}
          />
          <div title={"TEST"}>TEST</div>
        </TabList>
      </Col>
      <Col widthMd="25%">
        <SkillList skillCats={data.allSkillsJson.edges.map(e => e.node)} />
      </Col>
    </Row>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allEducationJson {
      edges {
        node {
          desc
          start
          title
          end
        }
      }
    }
    allPracticalJson {
      edges {
        node {
          desc
          start
          title
          end
        }
      }
    }
    allSkillsJson {
      edges {
        node {
          category
          skills {
            name
            rating
          }
        }
      }
    }
  }
`
