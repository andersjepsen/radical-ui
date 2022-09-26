import * as AvatarPrimitive from "@radix-ui/react-avatar";
import React from "react";
import { styled, theme } from "../../../stitches.config";
import { getInitials } from "../../helpers/getInitials";

const StyledAvatar = styled(AvatarPrimitive.Root, {
  $$size: theme.sizes.xs,
  $$radius: theme.radii.round,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "middle",
  overflow: "hidden",
  backgroundColor: theme.colors.blackA3,
  borderRadius: "$$radius",
  height: "$$size",
  width: "$$size",
  variants: {
    variant: {
      circle: {
        $$radius: theme.radii.round,
      },
      square: {
        $$radius: 0,
      },
      rounded: {
        $$radius: theme.radii.md,
      },
    },
    size: {
      sm: {
        $$size: theme.sizes.xxs,
      },
      md: {
        $$size: theme.sizes.xs,
      },
      lg: { $$size: theme.sizes.sm },
    },
  },
  defaultVariants: {
    variant: "circle",
    size: "md",
  },
});

const StyledImage = styled(AvatarPrimitive.Image, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit",
});

const StyledFallback = styled(AvatarPrimitive.Fallback, {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.colors.blackA9,
});

export interface AvatarProps {
  src: string;
  alt: string;
}

const Avatar = React.forwardRef<
  React.ElementRef<typeof StyledAvatar>,
  React.ComponentPropsWithoutRef<typeof StyledAvatar> & AvatarProps
>(({ src = "", alt, ...props }, forwardedRef) => {
  return (
    <StyledAvatar ref={forwardedRef} {...props}>
      <StyledImage src={src} alt={alt} />
      <StyledFallback delayMs={500}>{getInitials(alt)}</StyledFallback>
    </StyledAvatar>
  );
});

export default Avatar;
