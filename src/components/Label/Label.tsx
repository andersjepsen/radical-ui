import * as LabelPrimitive from "@radix-ui/react-label";
import React from "react";
import { styled, theme } from "../../../stitches.config";

const StyledLabel = styled(LabelPrimitive.Root, { userSelect: "none" });

const Label = React.forwardRef<
  React.ElementRef<typeof StyledLabel>,
  React.ComponentPropsWithoutRef<typeof StyledLabel>
>((props, forwardedRef) => {
  return <StyledLabel {...props} ref={forwardedRef}></StyledLabel>;
});

export default Label;
