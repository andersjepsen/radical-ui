import { css } from "../../stitches.config";

const justifyContentVariant = css({
  variants: {
    justifyContent: {
      around: {
        justifyContent: "space-around",
      },
      between: {
        justifyContent: "space-between",
      },
      center: {
        justifyContent: "center",
      },
      end: {
        justifyContent: "end",
      },
      evenly: {
        justifyContent: "space-evenly",
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
