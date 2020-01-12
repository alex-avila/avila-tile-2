import React from "react"
import PropTypes from "prop-types"
import styles from "./fancy-heading.module.sass"

const FancyHeading = ({ children, color, alignment }) => (
  <h2
    className={[
      styles.fancyHeading,
      styles[`align${alignment.toUpperCase()}`],
      styles[`color${color.toUpperCase()}`],
    ].join(" ")}
  >
    {children}
  </h2>
)

FancyHeading.propTypes = {
  color: PropTypes.string,
  alignment: PropTypes.string,
}

FancyHeading.defaultProps = {
  color: "shiny",
  alignment: "left",
}

export default FancyHeading
