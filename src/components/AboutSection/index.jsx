import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import ContentWrapper from "@components/ContentWrapper"
import FancyHeading from "@components/FancyHeading"

import styles from "./about-page.module.scss"

const AboutSection = ({ heading, image, body, bottomImage }) => {
  const data = useStaticQuery(graphql`
    query {
      bottomImage: file(relativePath: { eq: "hero-background.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <article className={styles.aboutSection}>
      <ContentWrapper withVerticalPadding>
        <FancyHeading>{heading}</FancyHeading>
        <div className={styles.content}>
          <div className={styles.contentImageWrapper}>
            <Img fluid={image.childImageSharp.fluid} />
          </div>
          <div className={styles.contentItem}>{body}</div>
          <Img
            className={styles.bottomImage}
            fluid={data.bottomImage.childImageSharp.fluid}
          />
        </div>
      </ContentWrapper>
    </article>
  )
}

export default AboutSection
