import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import ContentWrapper from "@components/ContentWrapper"
import Button from "@components/Button"
import SmallNav from "@components/SmallNav"
import styles from "./header.module.sass"

import logo from "../../images/logo-white-tagline.svg"

const links = [
  {
    text: "Home",
    to: "/",
  },
  {
    text: "About",
    to: "/about",
  },
  {
    text: "Gallery",
    to: "/gallery",
  },
  {
    text: "Contact",
    to: "/contact",
  },
]

const mappedLinks = links.map(({ text, to }, i) => (
  <Link
    className={styles.navLink}
    activeClassName={styles.navLinkActive}
    to={to}
    key={text + i}
  >
    {text}
  </Link>
))

const Header = ({ isHome = false }) => (
  <header className={isHome ? styles.headerHome : styles.header}>
    <ContentWrapper>
      <div className={styles.wrapper}>
        <Link to="/">
          <img className={styles.logo} src={logo} alt="Avila Tile" />
        </Link>
        <div>
          <div className={styles.largeNavWrapper}>
            <nav>
              {mappedLinks}
              <Button to="/contact">Free Estimate</Button>
            </nav>
          </div>
          <SmallNav className={styles.smallNavWrapper} />
        </div>
      </div>
    </ContentWrapper>
  </header>
)

Header.propTypes = {
  isHome: PropTypes.bool,
}

export default Header
