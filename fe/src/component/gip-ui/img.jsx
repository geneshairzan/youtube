import React from "react";
import { useState } from "react";
import Circle from "@/component/gip-ui/circle";
import { Stack } from "@mui/material";

export default function App({ path, className, src, sx }) {
  function getPath() {
    if (src) return src;
    return `${import.meta.env.VITE_BEURL}/public/${path}`;
  }
  return <img src={getPath()} alt="noimg" className={className} style={sx} />;
}
