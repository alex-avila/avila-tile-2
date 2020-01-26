import React from "react"
import PropTypes from "prop-types"

import ContentWrapper from "@components/ContentWrapper"
import FancyHeading from "@components/FancyHeading"
import Gallery from "@components/Gallery"
import styles from "./projects.module.sass"

const Projects = ({ images, types }) => (
  <article className={styles.projects}>
    <ContentWrapper>
      <div className={styles.textContent}>
        <FancyHeading>Latest Projects</FancyHeading>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit
          odio, dapibus elit condimentum vitae. Maecenas eget orci vitae mollis.
        </p>
      </div>
      <Gallery images={images} types={types} />
    </ContentWrapper>
  </article>
)

Projects.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  types: PropTypes.arrayOf(PropTypes.string),
}

Projects.defaultProps = {
  images: [{}],
  types: [],
}

export default Projects
