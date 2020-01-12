import React from "react"

import styles from "./content-wrapper.module.sass"

const ContentWrapper = ({ children }) => (
  <div className={styles.contentWrapper}>{children}</div>
)

export default ContentWrapper
