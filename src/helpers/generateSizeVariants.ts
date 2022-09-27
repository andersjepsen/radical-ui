import { Stitches, theme } from "../../stitches.config";

const generateSizeVariants = (key: string) => {
  return Object.values(theme.sizes).reduce((prev, size) => {
    return { ...prev, [size.token]: { [key]: `$${size.token}` } };
  }, {}) as Record<keyof typeof theme.sizes, Stitches.CSS>;
};

export { generateSizeVariants };
