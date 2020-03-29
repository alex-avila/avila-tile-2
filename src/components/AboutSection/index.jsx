import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import ContentWrapper from "@components/ContentWrapper"
import FancyHeading from "@components/FancyHeading"
import Image from "@components/Image"

import styles from "./about-page.module.sass"

const AboutSection = () => {
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
        <FancyHeading>Who We Are</FancyHeading>
        <div className={styles.content}>
          <div className={styles.contentImageWrapper}>
            <Image />
          </div>
          <div className={styles.contentItem}>
            <p>
              Family owned and operated, Avila Tile prides ourselves in
              delivering our best work to your business or residential
              improvement.
            </p>
            <p>
              Our clientele has built itself over the last 7 years based off
              recommendation, professionalism and attention to detail. Lorem
              ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip. Lorem ipsum
              dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
              nibh euismod tincidunt ut laoreet dolore magna aliquam erat
              volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip. Lorem ipsum
              dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
              nibh euismod tincidunt ut laoreet dolore magna aliquam erat
              volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip.
            </p>
          </div>
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
