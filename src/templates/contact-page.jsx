import React from "react"
import { graphql } from "gatsby"
import { HelmetProvider } from "react-helmet-async"

import Default from "@layouts/Default"
import ContactForm from "@components/ContactForm"
import SEO from "@components/Seo"

const ContactPage = ({ data }) => {
  return (
    <HelmetProvider>
      <Default>
        <SEO title="Home" />
        <ContactForm copy="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat." />
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
