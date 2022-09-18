import { css } from "../../stitches.config";

const fillVariant = css({
  variants: {
    fill: {
      true: {
        width: "100%",
        height: "100%",
      },
      horizontal: { width: "100%" },
      vertical: { height: "100%" },
    },
  },
});

export default fillVariant;
