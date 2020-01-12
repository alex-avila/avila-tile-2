import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"
import Button from "@components/Button"
import styles from "./hero.module.sass"

const Hero = () => {
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
        <div className={styles.content}>
          <h1>Avila Tile makes sure every detail is perfect.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Button to="/page-2">View Projects</Button>
        </div>
      </div>
    </div>
  )
}

export default Hero
