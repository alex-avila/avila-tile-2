import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import ContentWrapper from "@components/ContentWrapper"
import FancyHeading from "@components/FancyHeading"

import styles from "./services-section.module.sass"

const ServicesSection = () => {
  const data = useStaticQuery(
    graphql`
      query {
        backgroundImage: imageSharp(
          fluid: { originalName: { eq: "gold-tile-pattern.jpg" } }
        ) {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    `
  )

  return (
    <div className={styles.servicesSection}>
      <Img
        className={styles.backgroundImage}
        fluid={data.backgroundImage.fluid}
        imgStyle={{ objectPosition: "50% 10%" }}
      />
      <ContentWrapper withVerticalPadding>
        <div className={styles.content}>
          <FancyHeading>Our Services</FancyHeading>
          <div>
            <p>
              Avila Tile is a professional, fully licensed and insured tile
              installation company sesrving all of the Denver Metro Area, and
              sorrounding areas withing a 30 mile radius.
            </p>
            <p>
              We work with all types of tile including ceramic, porcelain,
              glass, marble, metal and natural stone. Our experts have over 15
              years experience installing tile of all kinds for both residential
              and commercial clients.
            </p>
            <p>Our installation services include:</p>
            <ul className={styles.servicesList}>
              <li>Full remodels</li>
              <li>New construction</li>
              <li>Kitchen backspashes</li>
              <li>Regular showers</li>
              <li>Steam showers</li>
              <li>Shower pans</li>
              <li>Fireplaces</li>
              <li>Floors</li>
              <li>Stain resistant grouts</li>
            </ul>
          </div>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default ServicesSection
