import * as React from "react";
import { TextField, Typography, Stack } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { fdate } from "@/component/gip-helper/formating";

export default function DatePickerText(props) {
  return (
    <Stack spacing={1}>
      <Typography
        variant="Overline"
        color="primary.dark"
        className="f-bold f-capitalize"
      >
        {props.label}
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MobileDatePicker
          {...props}
          label=""
          disablePast
          inputFormat="dd MMM yyyy"
          closeOnSelect
          renderInput={(params) => (
            <TextField {...params} disabled={props.disabled} color="primary" />
          )}
        />
      </LocalizationProvider>
    </Stack>
  );
}
