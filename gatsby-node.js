/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@layouts": path.resolve(__dirname, "src/layouts"),
        "@components": path.resolve(__dirname, "src/components"),
        "@style": path.resolve(__dirname, "src/style"),
      },
    },
  })
}
