import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import TimeLine from "../components/timeline/timeLine"

import education from "../jsonDataSource/education.json"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <TimeLine title={"Education"} entries={education} />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
