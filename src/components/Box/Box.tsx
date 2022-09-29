import { styled, theme } from "../../../stitches.config";
import { generateSizeVariants } from "../../helpers/generateSizeVariants";
import {
  alignItemsVariant,
  alignSelfVariant,
  fillVariant,
  flexVariant,
  gapVariant,
  justifyContentVariant,
  overflowVariant,
  paddingVariant,
} from "../../variants";

const Box = styled(
  "div",
  alignItemsVariant,
  alignSelfVariant,
  fillVariant,
  flexVariant,
  gapVariant,
  justifyContentVariant,
  overflowVariant,
  paddingVariant,
  {
    display: "flex",
    boxSizing: "border-box",
    maxWidth: "100%",
    variants: {
      borderRadius: {
        sm: {
          borderRadius: theme.radii.sm,
        },
        md: {
          borderRadius: theme.radii.md,
        },
        lg: {
          borderRadius: theme.radii.lg,
        },
        round: {
          borderRadius: theme.radii.round,
        },
        pill: {
          borderRadius: theme.radii.pill,
        },
      },
      direction: {
        row: {
          flexDirection: "row",
        },
        column: {
          flexDirection: "column",
        },
        rowReverse: {
          flexDirection: "row-reverse",
        },
        columnReverse: {
          flexDirection: "column-reverse",
        },
      },
      alignContent: {
        start: {
          alignContent: "start",
        },
        center: {
          alignContent: "center",
        },
        end: {
          alignContent: "end",
        },
        between: {
          alignContent: "between",
        },
        around: {
          alignContent: "around",
        },
        stretch: {
          alignContent: "stretch",
        },
      },
      wrap: {
        wrap: {
          flexWrap: "wrap",
        },
        nowrap: {
          flexWrap: "nowrap",
        },
      },
      width: generateSizeVariants("width"),
      flexBasis: generateSizeVariants("flexBasis"),
    },
    defaultVariants: {
      direction: "column",
      alignContent: "stretch",
      wrap: "wrap",
    },
  }
);

export default Box;
