import React from "react"
import { HelmetProvider } from "react-helmet-async"
import { Link } from "gatsby"

import Layout from "@components/Layout"
import SEO from "@components/Seo"

const SecondPage = () => (
  <HelmetProvider>
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  </HelmetProvider>
)

export default SecondPage
