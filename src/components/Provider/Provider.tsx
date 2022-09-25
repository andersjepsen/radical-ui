import React from "react";
import globalStyles from "../../../global.styles";

const Provider = ({ children }: { children: React.ReactNode }) => {
  globalStyles();

  return <>{children}</>;
};

export default Provider;
