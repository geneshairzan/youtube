import { TextField, Typography, Stack, Tooltip } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

export default function App(props) {
  return (
    <Stack spacing={1} width={props.fullWidth ? "100%" : "auto"}>
      <Stack direction={"row"} spacing={1}>
        <Typography
          variant="Overline"
          color="primary.dark"
          className="f-bold f-capitalize"
        >
          {props.label}
        </Typography>
        {props.tip && (
          <Tooltip title={props.tip}>
            <InfoIcon color="primary" />
          </Tooltip>
        )}
      </Stack>
      <TextField {...props} label="" />
    </Stack>
  );
}
