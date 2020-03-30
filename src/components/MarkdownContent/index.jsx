import React from "react"
import PropTypes from "prop-types"
import remark from "remark"
import recommended from "remark-preset-lint-recommended"
import remarkHtml from "remark-html"

const converter = content =>
  remark()
    .use(recommended)
    .use(remarkHtml)
    .processSync(content)
    .toString()

const MarkdownContent = ({ content }) => (
  <div dangerouslySetInnerHTML={{ __html: converter(content) }} />
)

MarkdownContent.propTypes = {
  content: PropTypes.string,
}

export default MarkdownContent
