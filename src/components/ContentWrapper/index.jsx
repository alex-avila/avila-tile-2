import React from "react"

import styles from "./content-wrapper.module.sass"

const ContentWrapper = ({ children, withVerticalPadding = false }) => (
  <div
    className={
      withVerticalPadding
        ? styles.contentWrapperWithVertical
        : styles.contentWrapper
    }
  >
    {children}
  </div>
)

export default ContentWrapper
