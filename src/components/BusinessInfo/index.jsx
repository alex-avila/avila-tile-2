import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import ContentWrapper from "@components/ContentWrapper"
import Image from "@components/Image"
import FancyHeading from "@components/FancyHeading"
import Button from "@components/Button"
import styles from "./businessInfo.module.sass"
import { rhythm } from "../../utils/typography"

const BusinessInfo = () => {
  const data = useStaticQuery(
    graphql`
      query {
        imageSharp(fluid: { originalName: { eq: "gold-tile-pattern.jpg" } }) {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    `
  )
  return (
    <article className={styles.businessInfo}>
      <Img
        className={styles.backgroundImage}
        fluid={data.imageSharp.fluid}
        imgStyle={{ objectPosition: "50% 10%" }}
      />
      <ContentWrapper>
        <div className={styles.content}>
          <Image className={styles.contentItem} />
          <div className={styles.contentItem}>
            <h5
              className={styles.dateHeading}
              style={{ marginBottom: rhythm(0.5) }}
            >
              Since 2012
            </h5>
            <FancyHeading>Next level craftsmanship</FancyHeading>
            <p>
              Family owned and operated, Avila Tile prides ourselves in
              delivering our best work to your business or residential
              improvement. Our clientele has built itself over the last 7 years
              based off of recommendation, professionalism and attention to
              detail.
            </p>
            <Button>Learn More</Button>
          </div>
        </div>
      </ContentWrapper>
    </article>
  )
}

export default BusinessInfo
