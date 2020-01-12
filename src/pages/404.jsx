import React from "react"
import { HelmetProvider } from "react-helmet-async"

import Default from "@layouts/Default"
import SEO from "@components/Seo"

const NotFoundPage = () => (
  <HelmetProvider>
    <Default>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Default>
  </HelmetProvider>
)

export default NotFoundPage
