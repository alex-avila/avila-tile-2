import React from "react"

import styles from "./social-links.module.sass"

const iconsOptions = [
  // {
  //   icon: require("../../images/facebook-icon.svg"),
  //   alt: "Facebook",
  //   link: "https://www.instagram.com/avila.tile/",
  // },
  {
    icon: require("../../images/instagram-icon.svg"),
    alt: "Instagram",
    link: "https://www.instagram.com/avila.tile/",
  },
  {
    icon: require("../../images/email-icon.svg"),
    alt: "Email",
    link: "mailto:avila_912@hotmail.com",
  },
]

const mappedSocialLinks = iconsOptions.map(({ icon, alt, link }) => (
  <a
    key={alt}
    className={styles.link}
    href={link}
    rel="noopener noreferrer"
    target="_blank"
  >
    <img
      className={alt === "Email" ? styles.emailIcon : styles.icon}
      src={icon}
      alt={alt}
    />
  </a>
))

const SocialLinks = () => (
  <div className={styles.links}>{mappedSocialLinks}</div>
)

export default SocialLinks
