import { Stack } from "@mui/material";
import logo from "@img/logo.svg";
export default function Logo(props) {
  return (
    <Stack
      height={props.h || 64}
      alignItems={props.center ? "center" : "flex-start"}
    >
      <img
        src={logo}
        alt=""
        style={{
          objectFit: "contain",
          height: "100%",
        }}
      />
    </Stack>
  );
}
