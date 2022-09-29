import React from "react";
import { styled } from "../../../stitches.config";
import {
  generateFontSizeVariants,
  generateFontWeightVariants,
} from "../../helpers/generateVariants";
import Box from "../Box";

const StyledAnchor = styled("a", {
  "&:hover": {
    textDecoration: "underline",
    cursor: "pointer",
  },
  variants: {
    disabled: {
      true: {
        opacity: 0.3,
        pointerEvents: "none",
        "&:hover": {
          cursor: "default",
          textDecoration: "none",
        },
      },
      false: {},
    },
    weight: generateFontWeightVariants("fontWeight"),
    size: generateFontSizeVariants("fontSize"),
  },
});

export interface AnchorProps {
  icon?: React.ReactNode;
  iconPosition?: "start" | "end";
}

const Anchor = React.forwardRef<
  React.ElementRef<typeof StyledAnchor>,
  React.ComponentPropsWithoutRef<typeof StyledAnchor> & AnchorProps
>(({ children, icon, iconPosition = "start", ...props }, forwardedRef) => {
  const iconElement = () => <Box alignItems="center">{icon}</Box>;

  return (
    <StyledAnchor ref={forwardedRef} {...props}>
      {icon ? (
        <Box
          direction="row"
          alignItems="center"
          gap="sm"
          css={{ display: "inline-flex" }}
        >
          {iconPosition === "start" && iconElement()}
          {children}
          {iconPosition === "end" && iconElement()}
        </Box>
      ) : (
        children
      )}
    </StyledAnchor>
  );
});

export default Anchor;
