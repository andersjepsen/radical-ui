import React from "react";
import Box from "../Box";

const Header = React.forwardRef<
  React.ElementRef<typeof Box>,
  React.ComponentPropsWithoutRef<typeof Box>
>(({ color, ...props }, forwardedRef) => {
  return (
    <Box
      as="header"
      alignItems="center"
      direction="row"
      flex={false}
      justifyContent="between"
      ref={forwardedRef}
      {...props}
    />
  );
});

export default Header;
