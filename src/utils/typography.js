import Typography from "typography"
import bootstrapTheme from "typography-theme-bootstrap"
bootstrapTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  "a, a:visited": {
    color: "default",
  },
  button: {
    border: "none",
    margin: 0,
    padding: 0,
    width: "auto",
    overflow: "visible",

    background: "transparent",

    /* inherit font & color from ancestor */
    color: "inherit",
    font: "inherit",

    /* Normalize `line-height`. Cannot be changed from `normal` in Firefox 4+. */
    lineHeight: "normal",

    /* Corrects font smoothing for webkit */
    "-webkit-font-smoothing": "inherit",
    "-moz-osx-font-smoothing": "inherit",

    /* Corrects inability to style clickable `input` types in iOS */
    "-webkit-appearance": "none",
  },
})

const typography = new Typography(bootstrapTheme)

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
