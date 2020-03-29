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
        heading="Gallery of Our Work"
        copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit
        odio, dapibus elit condimentum vitae. Maecenas eget orci vitae mollis."
        images={frontmatter.projects.images}
        types={frontmatter.projects.types}
      />
      <FreeEstimateBanner />
    </Default>
  </HelmetProvider>
)

export default Gallery

export const pageQuery = graphql`
  query GalleryPageTemplate {
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
