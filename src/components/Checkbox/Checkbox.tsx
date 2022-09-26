import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import React from "react";
import { CheckIcon, DividerHorizontalIcon } from "@radix-ui/react-icons";
import { styled, theme } from "../../../stitches.config";
import Label from "../Label";

const StyledCheckbox = styled(CheckboxPrimitive.Root, {
  all: "unset",
  backgroundColor: theme.colors.white,
  size: theme.sizes.xxs,
  borderRadius: theme.radii.md,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: `0 0 0 1px ${theme.colors.blackA7}`,
  "&:focus": {
    boxShadow: `0 0 0 2px ${theme.colors.blue7}`,
  },
  "&:hover": { backgroundColor: theme.colors.blackA2 },
  "&[data-disabled]": {
    backgroundColor: theme.colors.blackA2,
  },
});

const StyledIndicator = styled(CheckboxPrimitive.CheckboxIndicator, {
  color: theme.colors.blackA10,
  display: "flex",
  "&[data-disabled]": {
    color: theme.colors.blackA7,
  },
});

const Flex = styled("div", { display: "flex", alignItems: "center" });

const Checkbox = React.forwardRef<
  React.ElementRef<typeof StyledCheckbox>,
  React.ComponentPropsWithoutRef<typeof StyledCheckbox> & {
    label?: string;
  }
>(({ label, ...props }, forwardedRef) => {
  return (
    <Flex>
      <StyledCheckbox {...props} ref={forwardedRef}>
        <StyledIndicator>
          <CheckIcon />
        </StyledIndicator>
      </StyledCheckbox>
      {label && (
        <Label
          css={{
            paddingLeft: theme.space[2],
            ...(props.disabled && { color: theme.colors.blackA8 }),
          }}
          htmlFor={props.id}
        >
          {label}
        </Label>
      )}
    </Flex>
  );
});

export default Checkbox;
