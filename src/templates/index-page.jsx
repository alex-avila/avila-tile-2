import React from "react"
import { HelmetProvider } from "react-helmet-async"

import Default from "@layouts/Default"
import SEO from "@components/Seo"
import Hero from "@components/Hero"
import BusinessInfo from "@components/BusinessInfo"
import Projects from "@components/Projects"
import Testimonials from "@components/Testimonials"
import FreeEstimateBanner from "@components/FreeEstimateBanner"

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <HelmetProvider>
      <Default>
        <SEO title="Home" />
        <Hero />
        <BusinessInfo />
        <Projects images={frontmatter.images} />
        <Testimonials />
        <FreeEstimateBanner />
      </Default>
    </HelmetProvider>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        images {
          image {
            childImageSharp {
              fluid(maxWidth: 350, sizes: "(max-width: 375px) 300px, 350px") {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          type
        }
      }
    }
  }
`
