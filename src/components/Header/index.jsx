import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import SmallNav from "@components/SmallNav"
import styles from "./header.module.sass"

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <div>
        <div className={styles.largeNavWrapper}>
          <nav>
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
            <Link className={styles.navLink} to="/estimate">
              Free Estimate
            </Link>
          </nav>
        </div>
        <SmallNav className={styles.smallNavWrapper} />
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
