import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"
import TimeLine from "../components/cv/timeline/timeLine"
import SkillList from "../components/cv/skills/SkillList"

import education from "../jsonDataSource/education.json"
import skills from "../jsonDataSource/skills.json"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="col-lg-8">
      <TimeLine title={"Education"} entries={education} />
    </div>
    <div class="col-lg-4">
      <SkillList skillCats={skills} />
    </div>
  </Layout>
)

export default IndexPage
