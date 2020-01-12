import React from "react"

import styles from "./social-links.module.sass"

import facebookIcon from "../../images/facebook-icon.svg"
import instagramIcon from "../../images/instagram-icon.svg"
import emailIcon from "../../images/email-icon.svg"
const iconsOptions = [
  {
    icon: facebookIcon,
    alt: "Facebook",
    link: "https://www.instagram.com/avila.tile/",
  },
  {
    icon: instagramIcon,
    alt: "Instagram",
    link: "https://www.instagram.com/avila.tile/",
  },
  {
    icon: emailIcon,
    alt: "Email",
    link: "https://www.instagram.com/avila.tile/",
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
