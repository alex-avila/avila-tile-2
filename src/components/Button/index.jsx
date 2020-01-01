import React from "react"
import PropTypes from "prop-types"
import styles from "./button.module.sass"

const Button = ({ children, variant, ...otherProps }) => {
  const DynamicTag = otherProps.to ? require("gatsby").Link : "button"

  return (
    <DynamicTag
      className={styles[`button${variant.toUpperCase()}`]}
      {...otherProps}
    >
      {children}
    </DynamicTag>
  )
}

Button.propTypes = {
  variant: PropTypes.string,
  otherProps: PropTypes.object,
}

Button.defaultProps = {
  variant: ``,
}

export default Button
