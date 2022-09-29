import { styled, theme } from "../../../stitches.config";
import {
  generateFontSizeVariants,
  generateFontWeightVariants,
} from "../../helpers/generateVariants";
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
    weight: generateFontWeightVariants("fontWeight"),
    size: generateFontSizeVariants("fontSize"),
  },
  defaultVariants: {
    truncate: false,
    wordBreak: "normal",
    size: "medium",
  },
});

export default Text;
