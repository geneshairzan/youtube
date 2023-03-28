import * as React from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Stack,
  Typography,
} from "@mui/material";

export default function RadioButtonsGroup({
  label,
  options = [],
  onChange,
  value,
  name,
}) {
  return (
    <Stack spacing={1}>
      <Typography
        variant="Overline"
        color="primary.dark"
        className="f-bold f-capitalize"
      >
        {label}
      </Typography>
      <RadioGroup row onChange={onChange} value={value} name={name}>
        {options.map((d) => (
          <FormControlLabel
            key={d.value}
            value={d.value}
            control={<Radio />}
            label={d.name}
          />
        ))}
      </RadioGroup>
    </Stack>
  );
}
