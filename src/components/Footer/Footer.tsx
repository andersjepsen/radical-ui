import React from "react";
import Box from "../Box";

const Footer = React.forwardRef<
  React.ElementRef<typeof Box>,
  React.ComponentPropsWithoutRef<typeof Box>
>(({ color, ...props }, forwardedRef) => {
  return (
    <Box
      as="footer"
      alignItems="center"
      direction="row"
      flex={false}
      justifyContent="between"
      ref={forwardedRef}
      {...props}
    />
  );
});

export default Footer;
