import React from "react"
import { graphql } from "gatsby"
import { HelmetProvider } from "react-helmet-async"

import Default from "@layouts/Default"
import SEO from "@components/Seo"
import AboutSection from "@components/AboutSection"
import ServicesSection from "@components/ServicesSection"
import FreeEstimateBanner from "@components/FreeEstimateBanner"

const AboutPage = ({
  data: {
    markdownRemark: { frontmatter },
  },
}) => (
  <HelmetProvider>
    <Default>
      <SEO title="About" />
      <AboutSection
        heading={frontmatter.about.heading}
        image={frontmatter.about.image}
        body={frontmatter.about.body}
        bottomImage={frontmatter.about.bottom_image}
      />
      <ServicesSection
        heading={frontmatter.services.heading}
        body={frontmatter.services.body}
        services={frontmatter.services.services}
      />
      <FreeEstimateBanner />
    </Default>
  </HelmetProvider>
)

export default AboutPage

export const pageQuery = graphql`
  query AboutPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      frontmatter {
        about {
          heading
          image {
            childImageSharp {
              fluid(maxWidth: 350, sizes: "(max-width: 375px) 300px, 350px") {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          body
          bottom_image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }

        services {
          heading
          body
          services {
            service
          }
        }
      }
    }
  }
`
