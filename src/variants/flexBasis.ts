import { css } from "../../stitches.config";

const flexBasisVariant = css({
  variants: {
    flexBasis: {
      auto: {
        flexBasis: "auto",
      },
      full: {
        flexBasis: "100%",
      },
      "1/2": {
        flexBasis: "50%",
      },
      "1/4": {
        flexBasis: "25%",
      },
      "2/4": {
        flexBasis: "50%",
      },
      "3/4": {
        flexBasis: "75%",
      },
      "1/3": {
        flexBasis: "33.33%",
      },
      "2/3": {
        flexBasis: "66.66%",
      },
    },
  },
});

export default flexBasisVariant;
