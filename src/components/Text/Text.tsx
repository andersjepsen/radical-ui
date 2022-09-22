import { styled, theme } from "../../../stitches.config";
import { alignSelfVariant, textAlignVariant } from "../../variants";

const Text = styled("span", alignSelfVariant, textAlignVariant, {
  variants: {
    truncate: {
      true: {
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        maxWidth: "100%",
      },
    },
    wordBreak: {
      normal: {
        wordBreak: "normal",
      },
      "break-all": {
        wordBreak: "break-all",
      },
      "keep-all": {
        wordBreak: "keep-all",
      },
      "break-word": {
        wordBreak: "break-word",
      },
    },
    weight: {
      normal: {
        fontWeight: theme.fontWeights.normal,
      },
      bold: {
        fontWeight: theme.fontWeights.bold,
      },
      lighter: {
        fontWeight: theme.fontWeights.lighter,
      },
      bolder: {
        fontWeight: theme.fontWeights.bolder,
      },
    },
    size: {
      xs: {
        fontSize: theme.fontSizes.xs,
      },
      sm: {
        fontSize: theme.fontSizes.sm,
      },
      md: {
        fontSize: theme.fontSizes.md,
      },
      lg: {
        fontSize: theme.fontSizes.lg,
      },
      xl: {
        fontSize: theme.fontSizes.xl,
      },
      xxl: {
        fontSize: theme.fontSizes.xxl,
      },
      "2xl": {
        fontSize: theme.fontSizes["2xl"],
      },
      "3xl": {
        fontSize: theme.fontSizes["3xl"],
      },
      "4xl": {
        fontSize: theme.fontSizes["4xl"],
      },
      "5xl": {
        fontSize: theme.fontSizes["5xl"],
      },
      "6xl": {
        fontSize: theme.fontSizes["6xl"],
      },
    },
  },
  defaultVariants: {
    truncate: false,
    wordBreak: "normal",
    size: "medium",
  },
});

export default Text;
