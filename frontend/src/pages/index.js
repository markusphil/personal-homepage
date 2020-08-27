import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"
import TimeLine from "../components/cv/timeline/timeLine"
import SkillList from "../components/cv/skills/SkillList"
import TabList from "../components/general/tabList"

import education from "../jsonDataSource/education.json"
import practical from "../jsonDataSource/practical.json"
import skills from "../jsonDataSource/skills.json"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="col-lg-8">
      <TabList>
        <TimeLine title={"Education"} entries={education} />
        <TimeLine title={"Practical Experiances"} entries={practical} />
        <div title={"TEST"}>TEST</div>
      </TabList>
    </div>
    <div class="col-lg-4">
      <SkillList skillCats={skills} />
    </div>
  </Layout>
)

export default IndexPage
