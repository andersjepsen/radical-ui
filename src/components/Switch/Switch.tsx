import * as SwitchPrimitive from "@radix-ui/react-switch";
import React from "react";
import { theme, styled, Stitches } from "../../../stitches.config";

const StyledSwitch = styled(SwitchPrimitive.Root, {
  all: "unset",
  width: theme.sizes[7],
  height: theme.sizes[5],
  backgroundColor: theme.colors.blackA9,
  borderRadius: theme.radii.pill,
  position: "relative",
  boxShadow: `0 2px 10px ${theme.colors.blackA7}`,
  "&:focus": { boxShadow: `0 0 0 2px ${theme.colors.blackA7}` },
  variants: {
    color: {
      primary: {
        '&[data-state="checked"]': {
          backgroundColor: theme.colors.blue9,
        },
      },
      success: {
        '&[data-state="checked"]': {
          backgroundColor: theme.colors.green9,
        },
      },
      warning: {
        '&[data-state="checked"]': {
          backgroundColor: theme.colors.yellow9,
        },
      },
      error: {
        '&[data-state="checked"]': {
          backgroundColor: theme.colors.red9,
        },
      },
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

const StyledThumb = styled(SwitchPrimitive.Thumb, {
  display: "block",
  width: theme.sizes[4],
  height: theme.sizes[4],
  backgroundColor: theme.colors.white,
  boxShadow: `0 2px 10px ${theme.colors.blackA7}`,
  borderRadius: theme.radii.round,
  transition: "transform 100ms",
  transform: "translateX(3px)",
  willChange: "transform",
  '&[data-state="checked"]': { transform: "translateX(25px)" },
  "&:focus": { boxShadow: `0 0 0 5px ${theme.colors.blackA8}` },
  variants: {
    color: {
      primary: {
        "&:hover": {
          backgroundColor: theme.colors.blue3,
        },
      },
      success: {
        "&:hover": {
          backgroundColor: theme.colors.green3,
        },
      },
      warning: {
        "&:hover": {
          backgroundColor: theme.colors.yellow3,
        },
      },
      error: {
        "&:hover": {
          backgroundColor: theme.colors.red3,
        },
      },
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

const Switch = React.forwardRef<
  React.ElementRef<typeof StyledSwitch>,
  React.ComponentPropsWithoutRef<typeof StyledSwitch>
>(({ color, ...props }, forwardedRef) => {
  return (
    <StyledSwitch ref={forwardedRef} color={color} {...props}>
      <StyledThumb color={color} />
    </StyledSwitch>
  );
});

export default Switch;
