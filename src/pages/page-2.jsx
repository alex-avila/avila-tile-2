import React from "react"
import { HelmetProvider } from "react-helmet-async"
import { Link } from "gatsby"

import Default from "@layouts/Default"
import SEO from "@components/Seo"

const SecondPage = () => (
  <HelmetProvider>
    <Default>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Default>
  </HelmetProvider>
)

export default SecondPage
