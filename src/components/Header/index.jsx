import { Link } from "gatsby"
import React from "react"

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

const Header = () => (
  <header className={styles.header}>
    <div className={styles.wrapper}>
      <Link to="/" className={styles.logoWrapper}>
        <img className={styles.logo} src={logo} alt="Avila Tile" />
      </Link>
      <div>
        <div className={styles.largeNavWrapper}>
          <nav>
            {mappedLinks}
            <Button to="/estimate">Free Estimate</Button>
          </nav>
        </div>
        <SmallNav className={styles.smallNavWrapper} />
      </div>
    </div>
  </header>
)

export default Header
