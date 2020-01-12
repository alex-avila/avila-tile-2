import React from "react"

import ContentWrapper from "@components/ContentWrapper"
import FancyHeading from "@components/FancyHeading"
import Gallery from "@components/Gallery"
import styles from "./projects.module.sass"

const Projects = () => (
  <article className={styles.projects}>
    <ContentWrapper>
      <FancyHeading>Latest Projects</FancyHeading>
      <Gallery />
    </ContentWrapper>
  </article>
)

export default Projects
