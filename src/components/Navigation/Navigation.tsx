import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { styled, theme } from "../../../stitches.config";

const StyledMenu = styled(NavigationMenuPrimitive.Root, {
  display: "flex",
});

const StyledList = styled(NavigationMenuPrimitive.List, {
  all: "unset",
  display: "flex",
  justifyContent: "center",

  listStyle: "none",
});

const StyledLink = styled(NavigationMenuPrimitive.Link, {
  padding: `${theme.space[1]} ${theme.space[2]}`,
  outline: "none",
  userSelect: "none",
  color: theme.colors.black,
  borderRadius: theme.radii.md,
  "&:focus": {
    boxShadow: `0 0 0 2px ${theme.colors.blue7}`,
  },
  "&:hover": { backgroundColor: theme.colors.blackA3 },
  //
  display: "block",
  textDecoration: "none",
});

export default Object.assign(StyledMenu, {
  List: StyledList,
  Item: NavigationMenuPrimitive.Item,
  Link: StyledLink,
});
