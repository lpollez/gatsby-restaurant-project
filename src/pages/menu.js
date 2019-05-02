import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { PageHeader, Banner } from "../utils"

const MenuPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={data.img.childImageSharp.fluid}>
      <Banner title="menu" subtitle="let's dig in" />
    </PageHeader>
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "bcg/menuBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default MenuPage
