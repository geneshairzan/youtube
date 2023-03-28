import React from "react";
import { useState } from "react";
import Circle from "@/component/gip-ui/circle";
import { Stack } from "@mui/material";

export default function UserImg({ user, className, w = 32 }) {
  const [err, seterr] = React.useState(false);
  if (err)
    return (
      <Circle bg="primary.main" w={w}>
        <Stack sx={{ fontSize: `${w * 0.6}px` }}>{user.name[0]}</Stack>
      </Circle>
    );
  return (
    <img
      src={`${import.meta.env.VITE_BEURL}/public/${user.img_path}`}
      alt="noimg"
      onError={(e) => {
        e.target.onError = seterr(true);
      }}
      className={className}
    />
  );
}
