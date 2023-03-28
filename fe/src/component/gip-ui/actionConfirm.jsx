import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function AlertDialog(props) {
  const [open, setOpen] = React.useState(false);

  function handleOk() {
    setOpen(false, props.onYes(true));
  }

  return (
    <>
      <Stack onClick={() => setOpen(true)}>{props.children}</Stack>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <Stack p={2} minWidth={300} spacing={2}>
          <Typography variant="h5" color={"primary"}>
            {props.msgTitle || "TITLE"}
          </Typography>
          <Typography variant="body1" color={"primary"}>
            {props.msg || "MESSAGE"}
          </Typography>

          <Stack direction={"row"} spacing={2}>
            <Button fullWidth onClick={() => setOpen(false)} color="error">
              {props.cancel_text || "Batal"}
            </Button>
            <Button fullWidth onClick={handleOk}>
              {props.ok_text || "Lanjutkan"}
            </Button>
          </Stack>
        </Stack>
      </Dialog>
    </>
  );
}
