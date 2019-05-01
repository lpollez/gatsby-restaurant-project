import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader } from "../utils"
import img from "../images/bcg/aboutBcg.jpeg"

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={img}>Hello from about page</PageHeader>
  </Layout>
)

export default AboutPage
