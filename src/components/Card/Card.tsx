import React from "react";
import { styled, theme } from "../../../stitches.config";

const CardComponent = styled("div", {
  border: `1px solid ${theme.colors.blackA7}`,
  borderRadius: theme.radii.md,
  backgroundColor: theme.colors.white,

  variants: {
    padding: {
      sm: {
        padding: `${theme.space[1]} ${theme.space[2]}`,
      },
      md: {
        padding: `${theme.space[2]} ${theme.space[3]}`,
      },
      lg: {
        padding: `${theme.space[3]} ${theme.space[4]}`,
      },
    },
  },
});

const CardHeader = styled("div", {});

const CardContent = styled("div", {});

const CardFooter = styled("div", {});

const Card = Object.assign(CardComponent, {
  Header: CardHeader,
  Content: CardContent,
  Footer: CardFooter,
});

export default Card;
