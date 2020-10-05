import React from "react"

import styles from "./textarea.module.sass"

const Textarea = React.forwardRef((props, ref) => {
  const elemProps = Object.fromEntries(Object.entries(props).filter(([key, val]) => (key !== 'isInvalid' && [key, val])))

  return <textarea className={!props.isInvalid ? styles.textarea : styles.textareaInvalid} {...elemProps} rows={6 || props.rows} ref={ref} />
})

export default Textarea
