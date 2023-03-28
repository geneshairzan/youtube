import { Stack, Typography } from "@mui/material";

export default function Apps({ children, w = 32, bg = "grey.c", ...props }) {
  return (
    <Stack width={w} height={w} borderRadius={"50%"} bgcolor={bg} className="center" {...props}>
      <Typography variant="h5" className="center f-uppercase" fontWeight="bold" color="white.main">
        {children}
      </Typography>
    </Stack>
  );
}
