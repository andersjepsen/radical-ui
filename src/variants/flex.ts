import { css } from "../../stitches.config";

const flexVariant = css({
  variants: {
    flex: {
      true: {
        flex: "1 1",
      },
      false: {
        flex: "0 0",
      },
      grow: { flex: "1 0" },
      shrink: { flex: "0 1" },
    },
  },
});

export default flexVariant;
