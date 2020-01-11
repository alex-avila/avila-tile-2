import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.5,
  scaleRatio: 2,
  googleFonts: [
    {
      name: "Roboto",
      styles: ["300", "400", "400i", "700"],
    },
    {
      name: "Raleway",
      styles: ["700"],
    },
  ],
  headerFontFamily: ["Roboto", "sans-serif"],
  bodyFontFamily: ["Roboto", "sans-serif"],
  headerWeight: 300,
  overrideStyles: () => ({
    h4: {
      fontWeight: "bold",
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
  }),
})

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
