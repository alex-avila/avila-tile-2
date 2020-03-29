import React from "react"
import { graphql } from "gatsby"
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
      <Default isHome>
        <SEO title="Home" />
        <Hero
          heading={frontmatter.hero.heading}
          subheading={frontmatter.hero.subheading}
        />
        <BusinessInfo
          heading={frontmatter.about.heading}
          text={frontmatter.about.text}
        />
        <Projects
          theme="dark"
          images={frontmatter.projects.images}
          types={frontmatter.projects.types}
        />
        <Testimonials
          heading={frontmatter.testimonials.heading}
          testimonials={frontmatter.testimonials.testimonials}
        />
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
        hero {
          heading
          subheading
        }
        about {
          heading
          text
        }
        projects {
          heading
          text
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
          types
        }
        testimonials {
          heading
          testimonials {
            author
            quote
          }
        }
      }
    }
  }
`
