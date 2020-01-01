import React from "react"
import PropTypes from "prop-types"
import styles from "./fancy-heading.module.sass"

const FancyHeading = ({ children, color }) => (
  <h2
    className={[
      styles.fancyHeading,
      styles[`color${color.toUpperCase()}`],
    ].join(" ")}
  >
    {children}
  </h2>
)

FancyHeading.propTypes = {
  color: PropTypes.string,
}

FancyHeading.defaultProps = {
  color: "shiny",
}

export default FancyHeading
