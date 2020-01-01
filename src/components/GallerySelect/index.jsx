import React from "react"
import PropTypes from "prop-types"
import styles from "./gallery-select.module.sass"

const GallerySelect = ({ options, activeOption, setActiveOption }) => (
  <select
    className={styles.gallerySelect}
    onChange={({ target }) => setActiveOption(target.value)}
  >
    {options.map((option, i) => (
      <option value={option} key={option + i}>
        {option}
      </option>
    ))}
  </select>
)

GallerySelect.propTypes = {
  options: PropTypes.array.isRequired,
  activeOption: PropTypes.string.isRequired,
  setActiveOption: PropTypes.func.isRequired,
}

export default GallerySelect
