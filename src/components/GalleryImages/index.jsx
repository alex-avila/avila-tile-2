import React from "react"
import PropTypes from "prop-types"

import styles from "./gallery-images.module.sass"

const GalleryImages = ({ images }) => {
  const mappedImages = images.map(image => (
    <img src={image.image} alt={image.type} />
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
