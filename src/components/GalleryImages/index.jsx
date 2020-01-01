import React from "react"
import PropTypes from "prop-types"

const GalleryImages = ({ category }) => <div>{category}</div>

GalleryImages.propTypes = {
  category: PropTypes.string,
}

GalleryImages.defaultProps = {
  category: "All",
}

export default GalleryImages
