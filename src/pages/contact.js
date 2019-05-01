import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { PageHeader } from "../utils"

const ContactPage = ({ data }) => (
  <Layout>
    <SEO title="Contact" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={data.img.childImageSharp.fluid} />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "bcg/contactBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default ContactPage
