import React from "react"

import ContentWrapper from "@components/ContentWrapper"
import SocialLinks from "@components/SocialLinks"
import styles from "./footer.module.sass"

const Footer = () => (
  <footer className={styles.footer}>
    <ContentWrapper>
      <div className={styles.wrapper}>
        <div className={styles.copy}>
          © {new Date().getFullYear()} Avila Tile. All Rights Reserved
        </div>
        <div className={styles.socialLinksWrapper}>
          <SocialLinks />
        </div>
      </div>
    </ContentWrapper>
  </footer>
)

export default Footer
