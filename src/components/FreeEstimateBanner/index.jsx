import React from "react"
import Button from "@components/Button"
import styles from "./free-estimate-banner.module.sass"

const FreeEstimateBanner = () => (
  <section className={styles.freeEstimateBanner}>
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>Get a FREE estimate!</h2>
      <Button variant="spacyghost">Contact Us</Button>
    </div>
  </section>
)

export default FreeEstimateBanner
