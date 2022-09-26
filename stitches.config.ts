import {
  blackA,
  blue,
  blueA,
  gray,
  green,
  greenA,
  red,
  redA,
  yellow,
  yellowA,
} from "@radix-ui/colors";
import type * as Stitches from "@stitches/react";
import { createStitches } from "@stitches/react";

export type { Stitches };

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  prefix: "radical",
  theme: {
    colors: {
      //grays
      ...gray,
      //overlays
      ...blackA,

      //colors
      ...red,
      ...blue,
      ...yellow,
      ...green,

      //color alphas
      ...redA,
      ...blueA,
      ...yellowA,
      ...greenA,
      white: "#fff",
      black: "#000",
    },
    space: {
      1: "4px",
      2: "8px",
      3: "16px",
      4: "20px",
      5: "24px",
      6: "32px",
      7: "48px",
      8: "64px",
      9: "80px",
    },
    fontSizes: {
      xs: "12px",
      sm: "14px",
      md: "18px",
      lg: "22px",
      xl: "26px",
      xxl: "34px",
      "2xl": "34px",
      "3xl": "48px",
      "4xl": "66px",
      "5xl": "82px",
      "6xl": "114px",
    },
    fonts: {},
    fontWeights: {
      lighter: 200,
      normal: 400,
      bold: 700,
      bolder: 900,
    },
    lineHeights: {},
    letterSpacings: {},
    sizes: {
      xxs: "24px",
      xs: "48px",
      sm: "96px",
      md: "192px",
      lg: "384px",
      xl: "768px",
      full: "100%",
    },
    borderWidths: {},
    borderStyles: {},
    radii: {
      sm: "2px",
      md: "4px",
      lg: "8px",
      round: "50%",
      pill: "99999px",
    },
    shadows: {},
    zIndices: {},
    transitions: {},
  },
  media: {
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
  },
  utils: {
    size: (value: Stitches.ScaleValue<"sizes">) => ({
      width: value,
      height: value,
    }),
    paddingX: (value: Stitches.ScaleValue<"space">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value: Stitches.ScaleValue<"space">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
});
