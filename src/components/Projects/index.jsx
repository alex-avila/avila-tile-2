import React from "react"
import PropTypes from "prop-types"

import ContentWrapper from "@components/ContentWrapper"
import FancyHeading from "@components/FancyHeading"
import Gallery from "@components/Gallery"
import styles from "./projects.module.sass"

const Projects = ({
  heading = "Latest Projects",
  copy,
  theme = "light",
  images,
  types,
}) => (
  <article
    className={
      theme === "light" ? styles.projectsLightTheme : styles.projectsDarkTheme
    }
  >
    <ContentWrapper withVerticalPadding>
      <div className={styles.textContent}>
        <FancyHeading>{heading}</FancyHeading>
        <p>{copy}</p>
      </div>
      <Gallery images={images} types={types} />
    </ContentWrapper>
  </article>
)

Projects.propTypes = {
  heading: PropTypes.string,
  copy: PropTypes.string,
  theme: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.object),
  types: PropTypes.arrayOf(PropTypes.string),
}

Projects.defaultProps = {
  images: [{}],
  types: [],
}

export default Projects
