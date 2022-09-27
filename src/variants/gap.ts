import { css, theme } from "../../stitches.config";

const gapVariant = css({
  variants: {
    gap: {
      sm: {
        gap: theme.space[1],
      },
      md: {
        gap: theme.space[2],
      },
      lg: {
        gap: theme.space[3],
      },
    },
  },
});

export default gapVariant;
