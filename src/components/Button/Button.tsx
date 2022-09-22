import React from "react";
import { styled, theme } from "../../../stitches.config";
import { paddingVariant } from "../../variants";
import Box from "../Box";

const StyledButton = styled("button", paddingVariant, {
  border: "none",
  borderRadius: theme.radii.pill,
  backgroundColor: theme.colors.white,
  "&:hover": {
    cursor: "pointer",
  },
  variants: {
    color: {
      default: {
        backgroundColor: theme.colors.blackA5,
        color: theme.colors.black,
        "&:hover": {
          backgroundColor: theme.colors.blackA3,
        },
      },
      primary: {
        backgroundColor: theme.colors.blue9,
        color: theme.colors.white,
        "&:hover": {
          backgroundColor: theme.colors.blue7,
          color: theme.colors.black,
        },
      },
      success: {
        backgroundColor: theme.colors.green9,
        color: theme.colors.white,
        "&:hover": {
          backgroundColor: theme.colors.green7,
          color: theme.colors.black,
        },
      },
      warning: {
        backgroundColor: theme.colors.yellow9,
        color: theme.colors.black,
        "&:hover": {
          backgroundColor: theme.colors.yellow7,
        },
      },
      error: {
        backgroundColor: theme.colors.red9,
        color: theme.colors.white,
        "&:hover": {
          backgroundColor: theme.colors.red7,
          color: theme.colors.black,
        },
      },
    },
  },

  defaultVariants: {
    color: "default",
    padding: "md",
  },
});

export interface ButtonProps {
  icon?: React.ReactNode;
  iconPosition?: "start" | "end";
}

const Button = React.forwardRef<
  React.ElementRef<typeof StyledButton>,
  React.ComponentPropsWithoutRef<typeof StyledButton> & ButtonProps
>(({ icon, iconPosition = "start", children, ...props }, forwardedRef) => {
  const iconElement = () => <Box alignItems="center">{icon}</Box>;

  return (
    <StyledButton ref={forwardedRef} {...props}>
      <Box direction="row" alignItems="center">
        {icon && iconPosition === "start" && iconElement()}
        {children}
        {icon && iconPosition === "end" && iconElement()}
      </Box>
    </StyledButton>
  );
});

export default Button;
