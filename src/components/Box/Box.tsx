import { styled } from "../../../stitches.config";
import {
  alignItemsVariant,
  alignSelfVariant,
  flexVariant,
  justifyContentVariant,
  overflowVariant,
  paddingVariant,
} from "../../variants";

const Box = styled(
  "div",
  alignItemsVariant,
  alignSelfVariant,
  flexVariant,
  justifyContentVariant,
  overflowVariant,
  paddingVariant,
  {
    display: "flex",
    boxSizing: "border-box",
    maxWidth: "100%",
    variants: {
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
    },
    defaultVariants: {
      direction: "column",
      alignContent: "stretch",
    },
  }
);

export default Box;
