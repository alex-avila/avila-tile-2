import Typography from "typography"

const typography = new Typography({
  baseFontSize: "17.333px",
  baseLineHeight: 1.5,
  scaleRatio: 2.77,
  headerFontFamily: ["Roboto", "sans-serif"],
  bodyFontFamily: ["Roboto", "sans-serif"],
  headerWeight: 300,
  overrideStyles: () => ({
    "h4, h5": {
      fontWeight: "bold",
      color: "#b0b0b0",
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
    img: {
      margin: 0,
    },
  }),
})

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
