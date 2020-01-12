import React from "react"

import styles from "./testimonial-card.module.sass"

import quoteLeft from "../../images/quote-icon-left.svg"
import quoteRight from "../../images/quote-icon-right.svg"

const TestimonialCard = ({ testimonial, author }) => (
  <div className={styles.cardWrapper}>
    <img className={styles.quoteLeft} src={quoteLeft} alt="" />
    <div className={styles.card}>
      <p>{testimonial}</p>
      <div className={styles.author}>— {author}</div>
    </div>
    <img className={styles.quoteRight} src={quoteRight} alt="" />
  </div>
)

export default TestimonialCard
