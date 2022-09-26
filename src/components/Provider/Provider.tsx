import React from "react";
import globalStyles from "../../../global.styles";
import {
  Provider as TooltipProvider,
  TooltipProviderProps,
} from "@radix-ui/react-tooltip";

const Provider = ({
  children,
  tooltipProps,
}: {
  children: React.ReactNode;
  tooltipProps?: TooltipProviderProps;
}) => {
  globalStyles();

  return <TooltipProvider {...tooltipProps}>{children}</TooltipProvider>;
};

export default Provider;
