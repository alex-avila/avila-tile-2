import React from "react"
import FancyHeading from "@components/FancyHeading"
import Button from "@components/Button"
import styles from "./businessInfo.module.sass"

const BusinessInfo = () => (
  <article className={styles.businessInfo}>
    <div className={styles.wrapper}>
      <FancyHeading>Next level craftsmanship</FancyHeading>
      <p>
        Family owned and operated, Avila Tile prides ourselves in delivering our
        best work to your business or residential improvement. Our clientele has
        built itself over the last 7 years based off of recommendation,
        professionalism and attention to detail.
      </p>
      <Button>Learn More</Button>
    </div>
  </article>
)

export default BusinessInfo
