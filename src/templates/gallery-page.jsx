import React from "react"
import { graphql } from "gatsby"
import { HelmetProvider } from "react-helmet-async"

import Default from "@layouts/Default"
import SEO from "@components/Seo"
import Projects from "@components/Projects"
import FreeEstimateBanner from "@components/FreeEstimateBanner"

const Gallery = ({
  data: {
    markdownRemark: { frontmatter },
  },
}) => (
  <HelmetProvider>
    <Default>
      <SEO title="Gallery" />
      <Projects
        theme="light"
        heading={frontmatter.heading}
        copy={frontmatter.description}
        types={frontmatter.types}
        images={frontmatter.images}
      />
      <FreeEstimateBanner />
    </Default>
  </HelmetProvider>
)

export default Gallery

export const pageQuery = graphql`
  query GalleryPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "gallery-page" } }) {
      frontmatter {
        heading
        description
        types
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
