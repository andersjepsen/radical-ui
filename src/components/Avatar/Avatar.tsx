import React from "react";

export interface AvatarProps {
  variant: "circular" | "square" | "rounded";
}

function Avatar({ variant = "circular" }: AvatarProps) {
  return <div>{variant}</div>;
}

export default Avatar;
