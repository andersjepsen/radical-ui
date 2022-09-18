import { css, theme } from "../../stitches.config";

const alignSelfVariant = css({
  variants: {
    alignSelf: {
      start: {
        alignSelf: "start",
      },
      center: {
        alignSelf: "center",
      },
      end: {
        alignSelf: "end",
      },
      stretch: {
        alignSelf: "stretch",
      },
    },
  },
});

export default alignSelfVariant;
