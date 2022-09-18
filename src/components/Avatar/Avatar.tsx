import * as AvatarPrimitive from "@radix-ui/react-avatar";
import React from "react";
import { styled, theme } from "../../../stitches.config";
import { getInitials } from "../../helpers/getInitials";

const StyledAvatar = styled(AvatarPrimitive.Root, {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "middle",
  overflow: "hidden",
  backgroundColor: theme.colors.blackA3,
  borderRadius: theme.radii.round,
  variants: {
    variant: {
      circle: {
        borderRadius: theme.radii.round,
      },
      square: {
        borderRadius: 0,
      },
      rounded: {
        borderRadius: theme.radii.md,
      },
    },
    size: {
      sm: {
        size: theme.sizes[4],
      },
      md: {
        size: theme.sizes[6],
      },
      lg: { size: theme.sizes[8] },
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
  variant?: "circle" | "square" | "rounded";
  size?: "sm" | "md" | "lg";
  src: string;
  alt: string;
}

const Avatar = React.forwardRef<
  React.ElementRef<typeof StyledAvatar>,
  React.ComponentPropsWithoutRef<typeof StyledAvatar> & AvatarProps
>(({ src = "", alt, ...props }, forwardedRef) => {
  return (
    <StyledAvatar {...props}>
      <StyledImage src={src} alt={alt} />
      <StyledFallback delayMs={500}>{getInitials(alt)}</StyledFallback>
    </StyledAvatar>
  );
});

export default Avatar;
