import { useNavigate } from "react-router-dom";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton, Stack, Typography, Button } from "@mui/material";

export default function App(props) {
  const r = useNavigate();
  return (
    <Stack my={2} direction="row">
      <Button
        startIcon={<ArrowBackIcon />}
        variant="text"
        onClick={() => r(-1)}
      >
        {props.title || (!props.noText && "title")}
      </Button>
    </Stack>
  );
}
