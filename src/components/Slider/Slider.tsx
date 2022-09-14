import * as SliderPrimitive from "@radix-ui/react-slider";
import React from "react";
import { theme, styled, Stitches } from "../../../stitches.config";

const StyledSlider = styled(SliderPrimitive.Root, {
  position: "relative",
  display: "flex",
  alignItems: "center",
  userSelect: "none",
  touchAction: "none",
  '&[data-orientation="horizontal"]': {
    height: theme.sizes[4],
  },
  '&[data-orientation="vertical"]': {
    flexDirection: "column",
    width: theme.sizes[4],
  },
});

const StyledTrack = styled(SliderPrimitive.Track, {
  backgroundColor: theme.colors.blackA5,
  position: "relative",
  flexGrow: 1,
  borderRadius: theme.radii.pill,
  '&[data-orientation="horizontal"]': { height: theme.space[1] },
  '&[data-orientation="vertical"]': { width: theme.space[1] },
});

const StyledRange = styled(SliderPrimitive.Range, {
  position: "absolute",
  borderRadius: theme.radii.pill,
  '&[data-orientation="horizontal"]': { height: "100%" },
  '&[data-orientation="vertical"]': { width: "100%" },

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

type RangeProps = Stitches.VariantProps<typeof StyledRange>;

const StyledThumb = styled(SliderPrimitive.Thumb, {
  all: "unset",
  display: "block",
  width: theme.sizes[4],
  height: theme.sizes[4],
  backgroundColor: theme.colors.white,
  boxShadow: `0 2px 10px ${theme.colors.blackA7}`,
  borderRadius: theme.radii.round,
  "&:hover": { backgroundColor: theme.colors.blue3 },
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

const Slider = React.forwardRef<
  React.ElementRef<typeof StyledSlider>,
  React.ComponentPropsWithoutRef<typeof StyledSlider> & RangeProps
>(({ color, ...props }, forwardedRef) => {
  return (
    <StyledSlider ref={forwardedRef} {...props}>
      <StyledTrack>
        <StyledRange color={color} />
      </StyledTrack>
      <StyledThumb color={color} />
    </StyledSlider>
  );
});

export default Slider;
