import React, { useState, useEffect } from "react"
import debounce from "../../utils/debounce"

import styles from "./carousel.module.sass"

const Carousel = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slideWidth, setSlideWidth] = useState(0)
  const [isInitialRender, setIsInitialRender] = useState(true)

  const slidesRef = React.createRef()

  const debouncedSetSlideWidth = debounce(() => {
    if (slidesRef.current) {
      setSlideWidth(
        parseFloat(window.getComputedStyle(slidesRef.current).width)
      )
    }
  }, 250)

  useEffect(() => {
    if (isInitialRender) {
      setSlideWidth(
        parseFloat(window.getComputedStyle(slidesRef.current).width)
      )
      setIsInitialRender(false)
    }

    window.addEventListener("resize", debouncedSetSlideWidth)
    return () => window.removeEventListener("resize", debouncedSetSlideWidth)
  }, [isInitialRender, setIsInitialRender, slidesRef, debouncedSetSlideWidth])

  return (
    <div className={styles.carousel}>
      <div
        ref={slidesRef}
        className={styles.slidesWrapper}
        style={{
          transform: `translate(${slideWidth * currentSlide * -1}px, 0)`,
        }}
      >
        {children}
      </div>
      <div className={styles.dots}>
        {children.map((child, i) => (
          <button
            className={i === currentSlide ? styles.dotActive : styles.dot}
            key={i}
            onClick={() => setCurrentSlide(i)}
            aria-label={`Testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
