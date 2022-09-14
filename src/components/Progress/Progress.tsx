import React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { theme, styled, Stitches } from "../../../stitches.config";

const StyledProgress = styled(ProgressPrimitive.Root, {
  position: "relative",
  overflow: "hidden",
  background: theme.colors.blackA5,
  borderRadius: theme.radii.pill,
  height: theme.sizes[2],
  // Fix overflow clipping in Safari
  // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
  transform: "translateZ(0)",
});

const StyledIndicator = styled(ProgressPrimitive.Indicator, {
  width: "100%",
  height: "100%",
  variants: {
    color: {
      primary: {
        backgroundColor: theme.colors.blue9,
      },
      success: {
        backgroundColor: theme.colors.green9,
      },
      warning: {
        backgroundColor: theme.colors.yellow9,
      },
      error: {
        backgroundColor: theme.colors.red9,
      },
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

type IndicatorProps = Stitches.VariantProps<typeof StyledIndicator>;

const Progress = React.forwardRef<
  React.ElementRef<typeof StyledProgress>,
  React.ComponentPropsWithoutRef<typeof StyledProgress> & IndicatorProps
>(({ value, max = 100, color, ...props }, forwardedRef) => {
  const transformPct = ((value ?? 0) / max) * 100;

  return (
    <StyledProgress value={value} max={max} ref={forwardedRef} {...props}>
      <StyledIndicator
        color={color}
        style={{ transform: `translateX(-${100 - transformPct}%)` }}
      />
    </StyledProgress>
  );
});

export default Progress;
