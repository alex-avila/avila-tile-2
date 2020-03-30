import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import ContentWrapper from "@components/ContentWrapper"
import FancyHeading from "@components/FancyHeading"

import styles from "./services-section.module.sass"

const ServicesSection = ({ heading, body, services }) => {
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
          <FancyHeading>{heading}</FancyHeading>
          <div>
            {body}
            <div className={styles.servicesListWrapper}>
              <p>Our installation services include:</p>
              <ul className={styles.servicesList}>
                {services.map(({ service }) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default ServicesSection
