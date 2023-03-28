import React, { useState } from "react";

import {
  Stack,
  Typography,
  TextField,
  MenuItem,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Autocomplete,
} from "@mui/material";
import { fetcher } from "./fetcher";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { fdate } from "../gip-helper/formating";

export default function FilterForm(props) {
  const [option, setoptions] = React.useState([]);

  async function fetchData() {
    let data = await fetcher({
      url: props.resource || "users",
      method: "GET",
    });
    setoptions(data);
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <Stack spacing={1} width={props.fullWidth ? "100%" : "auto"}>
      <Typography
        variant="body1"
        color="primary.dark"
        className="f-bold f-capitalize"
      >
        {props.label}
      </Typography>
      <Autocomplete
        sx={{
          "& .MuiChip-root": {
            my: 0,
            height: "24px",
          },
          "& .MuiChip-label": {
            py: 0,
          },
        }}
        multiple={props.multiple}
        options={option}
        getOptionLabel={(option) => `${option.name}`}
        onChange={(e, v) => props.onChange(v)}
        renderInput={(params) => <TextField {...params} label={""} />}
      />
    </Stack>
  );
}
