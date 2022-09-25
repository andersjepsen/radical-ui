import React from "react";
import { Stitches, styled, theme } from "../../../stitches.config";
import { textAlignVariant } from "../../variants";
import Box from "../Box";

const StyledBox = styled(Box, {
  $$shadowColor: theme.colors.blackA7,
  boxShadow: `0 0 0 1px $$shadowColor`,
  "&:focus-within": {
    boxShadow: `0 0 0 2px $$shadowColor`,
  },
  variants: {
    color: {
      primary: {
        $$shadowColor: theme.colors.blueA7,
      },
      success: {
        $$shadowColor: theme.colors.greenA7,
      },
      warning: {
        $$shadowColor: theme.colors.yellowA7,
      },
      error: {
        $$shadowColor: theme.colors.redA7,
      },
    },
  },
});

const StyledInput = styled("input", textAlignVariant, {
  appearance: "none",
  borderWidth: "0",
  boxSizing: "border-box",
  fontFamily: "inherit",
  margin: "0",
  outline: "none",
  width: "100%",
  height: theme.sizes[5],
  color: "inherit",

  "&::before": {
    boxSizing: "border-box",
  },
  "&::after": {
    boxSizing: "border-box",
  },
});

export interface TextFieldProps {
  adornment?: React.ReactNode;
  adornmentPosition?: "start" | "end";
}

const TextField = React.forwardRef<
  React.ElementRef<typeof StyledInput>,
  React.ComponentPropsWithoutRef<typeof StyledInput> &
    TextFieldProps &
    Stitches.VariantProps<typeof StyledBox>
>(
  (
    { adornment, adornmentPosition = "start", color, ...props },
    forwardedRef
  ) => {
    const adornmentElement = () => (
      <Box
        alignItems="center"
        css={{
          padding: theme.space[1],
        }}
      >
        {adornment}
      </Box>
    );

    return (
      <StyledBox
        borderRadius="md"
        direction="row"
        alignItems="center"
        padding="sm"
        color={color}
      >
        {adornment && adornmentPosition === "start" && adornmentElement()}
        <StyledInput ref={forwardedRef} {...props} />
        {adornment && adornmentPosition === "end" && adornmentElement()}
      </StyledBox>
    );
  }
);

export default TextField;
