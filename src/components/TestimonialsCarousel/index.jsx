import React from "react"
import Carousel from "@components/Carousel"
import CarouselSlide from "@components/CarouselSlide"
import TestimonialCard from "@components/TestimonialCard"

const testimonials = [
  {
    testimonial: `1 Avila Tile did an amazing job at my home. After being burned by a past floor company, Cristian came in and took over. His attention to detail and craftsmanship is of high quality and value. We also had an older home with awkward sizes, as well as cusom tile work we wanted to do. He is open to feedback while also giving professional advice and guidance on the job. Highly highly recommend and will hire again in the future!`,
    author: `Shawn M.`,
  },
  {
    testimonial: `2 Avila Tile did an amazing job at my home. After being burned by a past floor company, Cristian came in and took over. His attention to detail and craftsmanship is of high quality and value. We also had an older home with awkward sizes, as well as cusom tile work we wanted to do. He is open to feedback while also giving professional advice and guidance on the job. Highly highly recommend and will hire again in the future!`,
    author: `Shawn M.`,
  },
  {
    testimonial: `3 Avila Tile did an amazing job at my home. After being burned by a past floor company, Cristian came in and took over. His attention to detail and craftsmanship is of high quality and value. We also had an older home with awkward sizes, as well as cusom tile work we wanted to do. He is open to feedback while also giving professional advice and guidance on the job. Highly highly recommend and will hire again in the future!`,
    author: `Shawn M.`,
  },
]

const TestimonialCarousel = () => {
  const mappedSlides = testimonials.map(({ testimonial, author }, i) => (
    <CarouselSlide key={author + i}>
      <TestimonialCard testimonial={testimonial} author={author} />
    </CarouselSlide>
  ))

  return <Carousel>{mappedSlides}</Carousel>
}

export default TestimonialCarousel
