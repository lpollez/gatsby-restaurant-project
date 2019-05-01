import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader } from "../utils"
import img from "../images/bcg/contactBcg.jpeg"

const ContactPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={img}>Hello from contact page</PageHeader>
  </Layout>
)

export default ContactPage
