import { styled, theme } from "../../../stitches.config";
import Box from "../Box";
import Footer from "../Footer";
import Header from "../Header";

const CardComponent = styled(Box, {
  border: `1px solid ${theme.colors.blackA7}`,
  borderRadius: theme.radii.md,
  backgroundColor: theme.colors.white,
  defaultVariants: {
    overflow: "hidden",
  },
});

const CardHeader = styled(Header, {});

const CardBody = styled(Box, { defaultVariants: { flex: true } });

const CardFooter = styled(Footer, {});

const Card = Object.assign(CardComponent, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
});

export default Card;
