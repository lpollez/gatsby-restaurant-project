import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

function HomeHeader({ img, children }) {
  return <IndexHeader fluid={img}>{children}></IndexHeader>
}

function PageHeader({ img, children }) {
  return <DefaultHeader fluid={img}>{children}</DefaultHeader>
}

const IndexHeader = styled(BackgroundImage)`
  min-height: calc(100vh - 55.78px);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1 !important;
  background: rgba(0, 0, 0, 0.4);
  background-position: center;
  background-size: cover;
`

const DefaultHeader = styled(IndexHeader)`
  min-height: 60vh;
`

export { HomeHeader, PageHeader }
