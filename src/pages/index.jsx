import React from "react"

import Layout from "@components/Layout"
import SEO from "@components/Seo"
import Hero from "@components/Hero"
import BusinessInfo from "@components/BusinessInfo"
import Projects from "@components/Projects"
import Testimonials from "@components/Testimonials"
import FreeEstimateBanner from "@components/FreeEstimateBanner"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <BusinessInfo />
    <Projects />
    <Testimonials />
    <FreeEstimateBanner />
  </Layout>
)

export default IndexPage
