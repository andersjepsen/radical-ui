import { css } from "../../stitches.config";

const textAlignVariant = css({
  variants: {
    textAlign: {
      start: {
        textAlign: "start",
      },
      center: {
        textAlign: "center",
      },
      end: {
        textAlign: "end",
      },
      justify: {
        textAlign: "justify",
      },
    },
  },
});

export default textAlignVariant;
