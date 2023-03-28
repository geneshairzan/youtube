import React from "react";
import { Stack, Button, Typography } from "@mui/material";
import AttachmentIcon from "@mui/icons-material/Attachment";
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  display: "flex",
};

export default function App({
  result,
  btnText,
  accept = ".doc , .docx, .xls, .xlsx",
  hideAccept,
  color = "primary",
}) {
  const inputRef = React.useRef(null);
  const [file, setFile] = React.useState(null);

  React.useEffect(() => {
    result(file || null);
  }, [file]);

  return (
    <Stack>
      <input
        ref={inputRef}
        accept={accept}
        style={{ display: "none" }}
        id="raised-button-file"
        multiple
        type="file"
        onChange={(e) => {
          setFile(e.target.files[0]);
        }}
      />
      <Stack direction={"row"} alignItems="center" spacing={2}>
        <Button
          onClick={() => inputRef.current.click()}
          startIcon={<AttachmentIcon />}
          color={color}
        >
          {btnText || "Attach Document"}
        </Button>
        <Typography variant="caption" color="initial">
          {file ? file.name : `${hideAccept == true ? "" : accept}`}
        </Typography>
      </Stack>
    </Stack>
  );
}
