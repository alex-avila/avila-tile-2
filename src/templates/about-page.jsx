import React from "react"
import { graphql } from "gatsby"
import { HelmetProvider } from "react-helmet-async"

import Default from "@layouts/Default"
import SEO from "@components/Seo"
import AboutSection from "@components/AboutSection"
import ServicesSection from "@components/ServicesSection"
import FreeEstimateBanner from "@components/FreeEstimateBanner"

const AboutPage = ({ data }) => {
  return (
    <HelmetProvider>
      <Default>
        <SEO title="Home" />
        <AboutSection />
        <ServicesSection />
        <FreeEstimateBanner />
      </Default>
    </HelmetProvider>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query AboutPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      frontmatter {
        templateKey
      }
    }
  }
`
