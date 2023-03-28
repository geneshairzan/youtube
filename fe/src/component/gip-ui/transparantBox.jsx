import { Stack } from "@mui/material";

export default function App({ children, ...props }) {
  return (
    <Stack
      {...props}
      sx={{
        background: `linear-gradient(to right,  rgba(0, 0, 0,.9) 0%,rgba(0, 0, 0,.4) 60%, rgba(0, 0, 0,0) 100%)`,
      }}
    >
      {children}
    </Stack>
  );
}
