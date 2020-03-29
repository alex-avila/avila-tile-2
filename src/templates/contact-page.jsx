import React from "react"
import { graphql } from "gatsby"
import { HelmetProvider } from "react-helmet-async"

import Default from "@layouts/Default"
import SEO from "@components/Seo"

const ContactPage = ({ data }) => {
  return (
    <HelmetProvider>
      <Default>
        <SEO title="Home" />
      </Default>
    </HelmetProvider>
  )
}

export default ContactPage

export const pageQuery = graphql`
  query ContactPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "contact-page" } }) {
      frontmatter {
        templateKey
      }
    }
  }
`
