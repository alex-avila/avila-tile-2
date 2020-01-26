import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import ContentWrapper from "@components/ContentWrapper"
import FancyHeading from "@components/FancyHeading"
import TestimonialsCarousel from "@components/TestimonialsCarousel"
import styles from "./testimonials.module.sass"

const Testimonials = ({ heading, testimonials }) => {
  const data = useStaticQuery(
    graphql`
      query {
        imageSharp(
          fluid: { originalName: { eq: "testimonials-background.jpg" } }
        ) {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    `
  )

  return (
    <section className={styles.testimonials}>
      <Img
        className={styles.backgroundImage}
        fluid={data.imageSharp.fluid}
        imgStyle={{ objectPosition: "50% 60%" }}
      />
      <div className={styles.content}>
        <ContentWrapper>
          <FancyHeading color="dark" alignment="center">
            {heading}
          </FancyHeading>
          <TestimonialsCarousel testimonials={testimonials} />
        </ContentWrapper>
      </div>
    </section>
  )
}

export default Testimonials
