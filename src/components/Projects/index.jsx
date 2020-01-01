import React from "react"
import FancyHeading from "@components/FancyHeading"
import Gallery from "@components/Gallery"
import styles from "./projects.module.sass"

const Projects = () => (
  <article className={styles.projects}>
    <FancyHeading>Latest Projects</FancyHeading>
    <Gallery />
  </article>
)

export default Projects
