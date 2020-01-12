import React from "react"

import ContentWrapper from "@components/ContentWrapper"
import FancyHeading from "@components/FancyHeading"
import TestimonialsCarousel from "@components/TestimonialsCarousel"
import styles from "./testimonials.module.sass"

const Testimonials = () => (
  <section className={styles.testimonials}>
    <ContentWrapper>
      <FancyHeading color="dark" alignment="center">
        What our clients say
      </FancyHeading>
      <TestimonialsCarousel />
    </ContentWrapper>
  </section>
)

export default Testimonials
