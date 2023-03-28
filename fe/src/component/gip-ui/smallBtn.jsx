import { Button } from "@mui/material";

export default function App(props) {
  return (
    <Button
      sx={{
        py: "2px",
      }}
      {...props}
    >
      {props.children}
    </Button>
  );
}
