import { Button, Stack, Typography } from "@mui/material";

export default function App({ onChange }) {
  return (
    <Stack
      style={{
        position: "absolute",
        width: "100%",
        display: "flex",
        width: "100%",
        minHeight: 200,
        bottom: 0,
        padding: "64px",
        zIndex: 9999,
      }}
    >
      <Stack
        borderRadius={2}
        sx={{
          backgroundColor: "rgb(0,0,0,0.3)",
          minHeight: 200,
          bottom: 0,
        }}
        p={2}
      >
        <Typography>HAIR</Typography>
        <Stack direction={"row"} height={22} spacing={2}>
          <Button variant="contained" onClick={() => onChange({ hair: 0 })}>
            type1
          </Button>
          <Button variant="contained" onClick={() => onChange({ hair: 1 })}>
            type2
          </Button>
          <Button variant="contained" onClick={() => onChange({ hair: 2 })}>
            type3
          </Button>
        </Stack>
        <Typography mt={2}>TOP</Typography>
        <Stack direction={"row"} height={22} spacing={2}>
          <Button variant="contained" onClick={() => onChange({ top: 0 })}>
            type1
          </Button>
          <Button variant="contained" onClick={() => onChange({ top: 1 })}>
            type2
          </Button>
          <Button variant="contained" onClick={() => onChange({ top: 2 })}>
            type3
          </Button>
        </Stack>

        <Typography mt={2}>PANTS</Typography>
        <Stack direction={"row"} height={22} spacing={2}>
          <Button variant="contained" onClick={() => onChange({ bottom: 0 })}>
            type1
          </Button>
          <Button variant="contained" onClick={() => onChange({ bottom: 2 })}>
            type2
          </Button>
        </Stack>

        <Typography mt={2}>SHOES</Typography>
        <Stack direction={"row"} height={22} spacing={2}>
          <Button variant="contained" onClick={() => onChange({ footware: 0 })}>
            type1
          </Button>
          <Button variant="contained" onClick={() => onChange({ footware: 1 })}>
            type2
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
