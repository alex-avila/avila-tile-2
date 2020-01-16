import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

import styles from "./gallery-images.module.sass"

const GalleryImages = ({ images }) => {
  const mappedImages = images.map((image, i) => (
    <Img
      key={image.type + i}
      fluid={{ ...image.image.childImageSharp.fluid, aspectRatio: 1 }}
    />
  ))

  return <div className={styles.galleryImages}>{mappedImages}</div>
}

GalleryImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
}

GalleryImages.defaultProps = {
  images: [{}],
}

export default GalleryImages
