import { css, theme } from "../../stitches.config";

const alignItemsVariant = css({
  variants: {
    alignItems: {
      start: {
        alignItems: "start",
      },
      center: {
        alignItems: "center",
      },
      end: {
        alignItems: "end",
      },
      baseline: {
        alignItems: "baseline",
      },
      stretch: {
        alignItems: "stretch",
      },
    },
  },
});

export default alignItemsVariant;
