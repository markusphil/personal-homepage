import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import TimeLine from "../components/cv/timeline/timeLine"
import SkillList from "../components/cv/skills/SkillList"
import TabList from "../components/general/tabList"

import { Row, Col, Headline2 } from "../components/styled/general"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Lebenslauf: Markus Philipp" />
    <Headline2>Lebenslauf</Headline2>
    <Row>
      <Col widthMd="75%">
        <TabList>
          <TimeLine
            title={"Education"}
            entries={data.allEducationJson.edges.map(e => e.node)}
            hint={
              "* Derzeit hole ich einige Informatikkurse nach, bevor ich den Wechsel des Zweitfaches offziel abschließen kann."
            }
          />

          <TimeLine
            title={"Practical Experiences"}
            entries={data.allPracticalJson.edges.map(e => e.node)}
          />
        </TabList>
      </Col>
      <Col widthMd="25%">
        <SkillList
          title="Relevant Skills"
          skillCats={data.allSkillsJson.edges.map(e => e.node)}
        />
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
