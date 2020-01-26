import React from "react"
import Carousel from "@components/Carousel"
import CarouselSlide from "@components/CarouselSlide"
import TestimonialCard from "@components/TestimonialCard"

const TestimonialCarousel = ({ testimonials }) => {
  const mappedSlides = testimonials.map(({ quote, author }, i) => (
    <CarouselSlide key={author + i}>
      <TestimonialCard quote={quote} author={author} />
    </CarouselSlide>
  ))

  return <Carousel>{mappedSlides}</Carousel>
}

export default TestimonialCarousel
