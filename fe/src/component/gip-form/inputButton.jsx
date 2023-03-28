import { TextField, Stack, Typography, Button } from "@mui/material";

export default function App(props) {
  return (
    <Button
      type="submit"
      {...props}
      sx={{
        height: props.size == "large" ? 40 : 33,
        fontSize: 14,
      }}
      className="f-capitalize"
    >
      {props.t || "Submit"}
    </Button>
  );
}
