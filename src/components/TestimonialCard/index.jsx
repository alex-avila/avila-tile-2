import React from "react"

import styles from "./testimonial-card.module.sass"

const TestimonialCard = ({ testimonial, author }) => (
  <div className={styles.card}>
    <p>{testimonial}</p>
    <div className={styles.author}>— {author}</div>
  </div>
)

export default TestimonialCard
