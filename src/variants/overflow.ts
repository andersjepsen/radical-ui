import { css } from "../../stitches.config";

const overflowVariant = css({
  variants: {
    overflow: {
      auto: {
        overflow: "auto",
      },
      hidden: {
        overflow: "hidden",
      },
      scroll: {
        overflow: "scroll",
      },
      visible: {
        overflow: "visible",
      },
    },
  },
});

export default overflowVariant;
