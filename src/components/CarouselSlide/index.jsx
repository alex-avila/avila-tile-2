import React from "react"
import styles from "./carousel-slide.module.sass"

const CarouselSlide = ({ children }) => (
  <div className={styles.slide}>{children}</div>
)

export default CarouselSlide
