import { css, theme } from "../../stitches.config";

const justifyContentVariant = css({
  variants: {
    justifyContent: {
      around: {
        justifyContent: "around",
      },
      between: {
        justifyContent: "between",
      },
      center: {
        justifyContent: "center",
      },
      end: {
        justifyContent: "end",
      },
      evenly: {
        justifyContent: "evenly",
      },
      start: {
        justifyContent: "start",
      },
      stretch: {
        justifyContent: "stretch",
      },
    },
  },
});

export default justifyContentVariant;
