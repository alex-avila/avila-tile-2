import React from "react"
import { HelmetProvider } from "react-helmet-async"

import Default from "@layouts/Default"
import SEO from "@components/Seo"
import Hero from "@components/Hero"
import BusinessInfo from "@components/BusinessInfo"
import Projects from "@components/Projects"
import Testimonials from "@components/Testimonials"
import FreeEstimateBanner from "@components/FreeEstimateBanner"

const IndexPage = ({ images }) => (
  <HelmetProvider>
    <Default>
      <SEO title="Home" />
      <Hero />
      <BusinessInfo />
      <Projects images={images} />
      <Testimonials />
      <FreeEstimateBanner />
    </Default>
  </HelmetProvider>
)

export default IndexPage
