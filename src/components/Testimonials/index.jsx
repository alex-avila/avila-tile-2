import React from "react"

import FancyHeading from "@components/FancyHeading"
import TestimonialsCarousel from "@components/TestimonialsCarousel"
import styles from "./testimonials.module.sass"

const Testimonials = () => (
  <section className={styles.testimonials}>
    <div className={styles.wrapper}>
      <FancyHeading color="dark">What our clients say</FancyHeading>
      <TestimonialsCarousel />
    </div>
  </section>
)

export default Testimonials
