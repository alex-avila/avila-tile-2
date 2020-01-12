import React from "react"

import ContentWrapper from "@components/ContentWrapper"
import FancyHeading from "@components/FancyHeading"
import Gallery from "@components/Gallery"
import styles from "./projects.module.sass"

const Projects = () => (
  <ContentWrapper>
    <article className={styles.projects}>
      <FancyHeading>Latest Projects</FancyHeading>
      <Gallery />
    </article>
  </ContentWrapper>
)

export default Projects
