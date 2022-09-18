import React from "react";
import Box from "../Box";

const Main = React.forwardRef<
  React.ElementRef<typeof Box>,
  React.ComponentPropsWithoutRef<typeof Box>
>(({ color, ...props }, forwardedRef) => {
  return (
    <Box
      as="main"
      fill="vertical"
      flex="grow"
      overflow="auto"
      ref={forwardedRef}
      {...props}
    />
  );
});

export default Main;
