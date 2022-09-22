import React from "react";
import { Stitches, styled, theme } from "../../../stitches.config";
import { textAlignVariant } from "../../variants";
import Box from "../Box";

const StyledBox = styled(Box, {
  boxShadow: `0 0 0 1px ${theme.colors.blackA7}`,
  "&:focus-within": {
    boxShadow: `0 0 0 2px ${theme.colors.blue7}`,
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

type Test = Stitches.VariantProps<typeof StyledBox>;

const TextField = React.forwardRef<
  React.ElementRef<typeof StyledInput>,
  React.ComponentPropsWithoutRef<typeof StyledInput> & TextFieldProps
>(({ adornment, adornmentPosition = "start", ...props }, forwardedRef) => {
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
    >
      {adornment && adornmentPosition === "start" && adornmentElement()}
      <StyledInput ref={forwardedRef} {...props} />
      {adornment && adornmentPosition === "end" && adornmentElement()}
    </StyledBox>
  );
});

export default TextField;
