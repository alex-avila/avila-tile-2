import React from "react"

import styles from "./textarea.module.sass"

const Textarea = props => (
  <textarea className={styles.textarea} {...props} rows={6 || props.rows} />
)

export default Textarea
