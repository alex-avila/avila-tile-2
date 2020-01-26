import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import ContentWrapper from "@components/ContentWrapper"
import Button from "@components/Button"
import styles from "./hero.module.sass"

const Hero = ({ heading, subheading }) => {
  const data = useStaticQuery(
    graphql`
      query {
        imageSharp(fluid: { originalName: { eq: "hero-background.jpg" } }) {
          fluid(maxHeight: 500, cropFocus: NORTH) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    `
  )

  return (
    <div className={styles.hero}>
      <Img
        className={styles.heroImage}
        fluid={data.imageSharp.fluid}
        imgStyle={{ objectPosition: "50% 10%" }}
      />
      <div className={styles.contentWrapper}>
        <ContentWrapper>
          <div className={styles.content}>
            <h1>{heading}</h1>
            <p>{subheading}</p>
            <Button to="/page-2">View Projects</Button>
          </div>
        </ContentWrapper>
      </div>
    </div>
  )
}

export default Hero
