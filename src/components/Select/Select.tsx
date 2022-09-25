import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import * as SelectPrimitive from "@radix-ui/react-select";
import { styled } from "@stitches/react";
import React from "react";
import { theme } from "../../../stitches.config";

const StyledTrigger = styled(SelectPrimitive.SelectTrigger, {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: theme.radii.md,
  padding: `0 ${theme.space[2]}`,
  height: theme.space[6],
  gap: theme.space[2],
  backgroundColor: theme.colors.white,
  boxShadow: `0 0 0 1px ${theme.colors.blackA7}`,
  "&:focus": {
    boxShadow: `0 0 0 2px ${theme.colors.blue7}`,
  },
  "&:hover": { backgroundColor: theme.colors.blue3 },
  "&[data-placeholder]": { color: theme.colors.gray9 },
});

const StyledIcon = styled(SelectPrimitive.SelectIcon, {
  color: theme.colors.blue11,
});

const StyledContent = styled(SelectPrimitive.Content, {
  overflow: "hidden",
  backgroundColor: theme.colors.white,
  borderRadius: theme.radii.md,
  boxShadow: `0 2px 10px ${theme.colors.blackA7}`,
});

const StyledViewport = styled(SelectPrimitive.Viewport, {
  padding: theme.space[1],
});

const StyledItem = styled(SelectPrimitive.Item, {
  all: "unset",
  borderRadius: theme.radii.sm,
  display: "flex",
  alignItems: "center",
  height: theme.space[5],
  padding: `0 ${theme.space[5]}`,
  position: "relative",
  userSelect: "none",

  "&[data-disabled]": {
    color: theme.colors.gray8,
    pointerEvents: "none",
  },

  "&[data-highlighted]": {
    backgroundColor: theme.colors.blackA3,
  },
});

const StyledLabel = styled(SelectPrimitive.Label, {
  padding: `${theme.space[1]} ${theme.space[5]}`,
  color: theme.colors.gray11,
});

const StyledSeparator = styled(SelectPrimitive.Separator, {
  height: 1,
  backgroundColor: theme.colors.gray6,
  margin: theme.space[1],
});

const StyledItemIndicator = styled(SelectPrimitive.ItemIndicator, {
  position: "absolute",
  left: 0,
  width: theme.space[5],
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
});

const scrollButtonStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: theme.space[5],
  color: theme.colors.blue9,
};

const StyledScrollUpButton = styled(
  SelectPrimitive.ScrollUpButton,
  scrollButtonStyles
);

const StyledScrollDownButton = styled(
  SelectPrimitive.ScrollDownButton,
  scrollButtonStyles
);

const SelectGroup = ({
  label,
  children,
}: {
  label: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <SelectPrimitive.Group>
      <StyledLabel>{label}</StyledLabel>
      {children}
    </SelectPrimitive.Group>
  );
};

const SelectItem = React.forwardRef<
  React.ElementRef<typeof StyledItem>,
  React.ComponentPropsWithoutRef<typeof StyledItem>
>(({ children, ...props }, forwardedRef) => {
  return (
    <StyledItem ref={forwardedRef} {...props}>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <StyledItemIndicator>
        <CheckIcon />
      </StyledItemIndicator>
    </StyledItem>
  );
});

export interface SelectProps {
  placeholder?: React.ReactNode;
}

const Select = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root> & SelectProps
>(({ children, placeholder, ...props }, forwardedRef) => {
  return (
    <SelectPrimitive.Root {...props}>
      <StyledTrigger ref={forwardedRef}>
        <SelectPrimitive.Value placeholder={placeholder} />
        <StyledIcon>
          <ChevronDownIcon />
        </StyledIcon>
      </StyledTrigger>
      <SelectPrimitive.Portal>
        <StyledContent>
          <StyledScrollUpButton>
            <ChevronUpIcon />
          </StyledScrollUpButton>
          <StyledViewport>{children}</StyledViewport>
          <StyledScrollDownButton>
            <ChevronDownIcon />
          </StyledScrollDownButton>
        </StyledContent>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
});

export default Object.assign(Select, {
  Item: SelectItem,
  Seperator: StyledSeparator,
  Group: SelectGroup,
});
