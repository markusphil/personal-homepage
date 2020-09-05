import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import TimeLine from "../components/cv/timeline/timeLine"
import SkillCloud from "../components/cv/skills/SkillCloud"
import TabList from "../components/general/tabList"

import { Row, Col, Headline2, TextCenter } from "../components/styled/general"
import SkillSection from "../components/cv/skills/SkillSection"
import ProjectCardRow from "../components/projects/projectCardRow"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Lebenslauf: Markus Philipp" />
    <Headline2>Lebenslauf</Headline2>
    <Row>
      <Col widthMd="75%">
        <TabList>
          <TimeLine
            title={"Ausbildung"}
            entries={data.allEducationJson.edges.map(e => e.node)}
            hint={
              "* Derzeit hole ich einige Bachelorkurse der Informatik nach, damit der Wechsel des Zweitfaches abgeschlossen werden kann."
            }
          />
          <TimeLine
            title={"Praktische Erfahrungen"}
            entries={data.allPracticalJson.edges.map(e => e.node)}
          />
          <SkillSection
            title="Allgemeine Skills"
            content={data.allSoftSkillsJson.edges.map(e => e.node)}
          />
        </TabList>
      </Col>
      <Col widthMd="25%">
        <SkillCloud
          title="Fachliche Skills"
          skillCats={data.allSkillsJson.edges.map(e => e.node)}
        />
      </Col>
    </Row>
    <Headline2>Projekte</Headline2>
    <ProjectCardRow entries={data.allProjectsJson.edges.map(e => e.node)} />
    <TextCenter>
      Weitere Projekte auf <a href="https://github.com/markusphil">Github</a>
    </TextCenter>
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
          url
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
          url
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
    allSoftSkillsJson {
      edges {
        node {
          headline
          type
          entries {
            title
            descr
          }
        }
      }
    }
    allProjectsJson {
      edges {
        node {
          title
          descr
          url
        }
      }
    }
  }
`
