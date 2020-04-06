import React from "react"
import { graphql } from "gatsby"
import { HelmetProvider } from "react-helmet-async"

import Default from "@layouts/Default"
import ContactForm from "@components/ContactForm"
import SEO from "@components/Seo"

const ContactPage = ({
  data: {
    markdownRemark: { frontmatter },
  },
}) => {
  return (
    <HelmetProvider>
      <Default>
        <SEO title="Contact" />
        <ContactForm {...frontmatter} />
      </Default>
    </HelmetProvider>
  )
}

export default ContactPage

export const pageQuery = graphql`
  query ContactPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "contact-page" } }) {
      frontmatter {
        heading
        description
      }
    }
  }
`
