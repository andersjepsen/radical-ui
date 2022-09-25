import { globalCss } from "./stitches.config";

const globalStyles = globalCss({
  "*": {
    //reset
    margin: 0,
    padding: 0,
    verticalAlign: "baseline",
    fontWeight: "inherit",
    fontSize: "100%",
    border: "0 none",
    outline: 0,
    // set font family
    fontFamily:
      "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
    fontStyle: "inherit",
  },
});

export default globalStyles;
