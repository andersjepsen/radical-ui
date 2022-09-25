import * as SwitchPrimitive from "@radix-ui/react-switch";
import React from "react";
import { styled, theme } from "../../../stitches.config";

const StyledSwitch = styled(SwitchPrimitive.Root, {
  $$color: theme.colors.blackA5,
  $$shadowColor: theme.colors.blackA7,
  all: "unset",
  width: theme.sizes[7],
  height: theme.sizes[5],
  backgroundColor: theme.colors.blackA9,
  borderRadius: theme.radii.pill,
  position: "relative",
  boxShadow: `0 0 0 1px $$shadowColor`,
  "&:focus": { boxShadow: `0 0 0 2px $$shadowColor` },
  '&[data-state="checked"]': {
    backgroundColor: "$$color",
  },
  variants: {
    color: {
      primary: {
        $$color: theme.colors.blue9,
        $$shadowColor: theme.colors.blueA7,
      },
      success: {
        $$color: theme.colors.green9,
        $$shadowColor: theme.colors.greenA7,
      },
      warning: {
        $$color: theme.colors.yellow9,
        $$shadowColor: theme.colors.yellowA7,
      },
      error: {
        $$color: theme.colors.red9,
        $$shadowColor: theme.colors.redA7,
      },
    },
  },
});

const StyledThumb = styled(SwitchPrimitive.Thumb, {
  $$color: theme.colors.gray3,
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
  "&:hover": {
    backgroundColor: "$$color",
  },
  variants: {
    color: {
      primary: {
        $$color: theme.colors.blue3,
      },
      success: {
        $$color: theme.colors.green3,
      },
      warning: {
        $$color: theme.colors.yellow3,
      },
      error: {
        $$color: theme.colors.red3,
      },
    },
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
