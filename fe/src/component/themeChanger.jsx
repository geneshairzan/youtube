import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Context from "@/serviceProvider/context";

export default function BasicButtons() {
  const { app, setapp } = React.useContext(Context);

  function handleTheme() {
    setapp("theme", app.theme == "dark" ? "light" : "dark");
  }

  return (
    <Stack spacing={2} direction="column" p={2}>
      <Button variant="contained" onClick={handleTheme}>
        {`set theme ${app.theme}`}
      </Button>
    </Stack>
  );
}
