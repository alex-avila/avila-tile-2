import React from "react"

import styles from "./input.module.sass"

const Input = React.forwardRef((props, ref) => {
  const elemProps = Object.fromEntries(Object.entries(props).filter(([key, val]) => (key !== 'isInvalid' && [key, val])))

  return <input className={!props.isInvalid ? styles.input : styles.inputInvalid} {...elemProps} ref={ref} />
})

export default Input
