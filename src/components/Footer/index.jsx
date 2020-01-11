import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import styles from "./footer.module.sass"

import facebookIcon from "../../images/facebook-icon.svg"
import instagramIcon from "../../images/instagram-icon.svg"
import emailIcon from "../../images/email-icon.svg"
const iconsOptions = [
  {
    icon: facebookIcon,
    alt: "Facebook",
  },
  {
    icon: instagramIcon,
    alt: "Instagram",
  },
  {
    icon: emailIcon,
    alt: "Email",
  },
]

const mappedSocialLinks = iconsOptions.map(({ icon, alt }) => (
  <a key={alt} className={styles.link} href="#">
    <img
      className={alt === "Email" ? styles.emailIcon : styles.icon}
      src={icon}
      alt={alt}
    />
  </a>
))

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.wrapper}>
      © {new Date().getFullYear()} Avila Tile. All Rights Reserved
      <div className={styles.links}>{mappedSocialLinks}</div>
    </div>
  </footer>
)

export default Footer
