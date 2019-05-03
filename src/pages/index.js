import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import { HomeHeader, Banner, BannerButton } from "../utils" // by default, the index.js file inside a folder
import QuickInfo from "../components/homepagecomponents/QuickInfo"
import Gallery from "../components/homepagecomponents/Gallery"
import Menu from "../components/homepagecomponents/Menu"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader img={data.img.childImageSharp.fluid}>
      <Banner title="eatery" subtitle="55 main street - Santa Monica, CA">
        <Link to="/menu/" style={{ textDecoration: "none" }}>
          <BannerButton style={{ margin: "2rem auto" }}>menu</BannerButton>
        </Link>
      </Banner>
    </HomeHeader>
    <QuickInfo />
    <Gallery />
    <Menu />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "bcg/homeBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
