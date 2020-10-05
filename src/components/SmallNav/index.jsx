import React, { useState } from "react"
import { Link } from "gatsby"

import styles from "./small-nav.module.sass"

import menuIcon from "../../images/menu-icon.svg"
import closeIcon from "../../images/close-icon.svg"

const SmallNav = () => {
  const [isVisible, setVisibility] = useState(false)

  return (
    <div className={styles.smallNavWrapper}>
      <button onClick={() => setVisibility(true)}>
        <img className={styles.icon} src={menuIcon} alt="Open Navigation" />
      </button>
      <div className={isVisible ? styles.navWrapper : styles.hidden}>
        <button
          className={styles.closeButton}
          onClick={() => setVisibility(false)}
        >
          <img className={styles.icon} src={closeIcon} alt="Close Navigation" />
        </button>
        <nav className={styles.nav}>
          <Link className={styles.navLink} to="/">
            Home
          </Link>
          <Link className={styles.navLink} to="/about">
            About
          </Link>
          <Link className={styles.navLink} to="/gallery">
            Gallery
          </Link>
          <Link className={styles.navLink} to="/contact">
            Contact
          </Link>
          <Link className={styles.navLink} to="/contact">
            Free Estimate
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default SmallNav
