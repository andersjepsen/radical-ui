import { Stitches, theme } from "../../stitches.config";

const generateSizeVariants = (key: string) => {
  return Object.values(theme.sizes).reduce((prev, size) => {
    return { ...prev, [size.token]: { [key]: `$${size.token}` } };
  }, {}) as Record<keyof typeof theme.sizes, Stitches.CSS>;
};

const generateFontSizeVariants = (key: string) => {
  return Object.values(theme.fontSizes).reduce((prev, size) => {
    return { ...prev, [size.token]: { [key]: `$${size.token}` } };
  }, {}) as Record<keyof typeof theme.fontSizes, Stitches.CSS>;
};

const generateFontWeightVariants = (key: string) => {
  return Object.values(theme.fontWeights).reduce((prev, weight) => {
    return { ...prev, [weight.token]: { [key]: `$${weight.token}` } };
  }, {}) as Record<keyof typeof theme.fontWeights, Stitches.CSS>;
};

const generateRadiiVariants = (key: string) => {
  return Object.values(theme.radii).reduce((prev, radii) => {
    return { ...prev, [radii.token]: { [key]: `$${radii.token}` } };
  }, {}) as Record<keyof typeof theme.radii, Stitches.CSS>;
};

export {
  generateSizeVariants,
  generateFontSizeVariants,
  generateFontWeightVariants,
  generateRadiiVariants,
};
