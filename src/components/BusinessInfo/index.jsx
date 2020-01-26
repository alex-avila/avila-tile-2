import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import ContentWrapper from "@components/ContentWrapper"
import Image from "@components/Image"
import FancyHeading from "@components/FancyHeading"
import Button from "@components/Button"
import styles from "./businessInfo.module.sass"
import { rhythm } from "../../utils/typography"

const BusinessInfo = ({ heading, text }) => {
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
            <FancyHeading>{heading}</FancyHeading>
            <p>{text}</p>
            <Button>Learn More</Button>
          </div>
        </div>
      </ContentWrapper>
    </article>
  )
}

export default BusinessInfo
