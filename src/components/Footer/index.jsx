import React from "react"

import SocialLinks from "@components/SocialLinks"
import styles from "./footer.module.sass"

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.wrapper}>
      © {new Date().getFullYear()} Avila Tile. All Rights Reserved
      <SocialLinks />
    </div>
  </footer>
)

export default Footer
