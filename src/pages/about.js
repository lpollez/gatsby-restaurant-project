import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { PageHeader, Banner } from "../utils"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="A propos" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={data.img.childImageSharp.fluid}>
      <Banner title="A propos" subtitle="un peu de nous" />
    </PageHeader>
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "bcg/aboutBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
