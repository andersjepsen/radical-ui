import React from "react";
import globalStyles from "../../../global.styles";
import {
  Provider as TooltipProvider,
  TooltipProviderProps,
} from "@radix-ui/react-tooltip";

const Provider = ({
  children,
  tooltipProps,
  globalCss,
}: {
  children: React.ReactNode;
  tooltipProps?: TooltipProviderProps;
  globalCss?: () => void;
}) => {
  globalStyles();
  globalCss?.();

  return <TooltipProvider {...tooltipProps}>{children}</TooltipProvider>;
};

export default Provider;
