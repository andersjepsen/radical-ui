import { css, theme } from "../../stitches.config";

const paddingVariant = css({
  variants: {
    padding: {
      sm: {
        padding: `${theme.space[1]} ${theme.space[2]}`,
      },
      md: {
        padding: `${theme.space[2]} ${theme.space[3]}`,
      },
      lg: {
        padding: `${theme.space[3]} ${theme.space[4]}`,
      },
    },
  },
});

export default paddingVariant;
