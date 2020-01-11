import { Link } from "gatsby"
import React from "react"

import SmallNav from "@components/SmallNav"
import styles from "./header.module.sass"

import logo from "../../images/logo-white-tagline.svg"

const Header = () => (
  <header className={styles.header}>
    <div className={styles.wrapper}>
      <Link to="/" className={styles.logoWrapper}>
        <img className={styles.logo} src={logo} alt="Avila Tile" />
      </Link>
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

export default Header
