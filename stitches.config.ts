import { blackA, blue, gray, green, red, yellow } from "@radix-ui/colors";
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
    fontSizes: {},
    fonts: {},
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {
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
    borderWidths: {
      1: "1px",
      2: "2px",
      3: "4px",
    },
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
  },
});
