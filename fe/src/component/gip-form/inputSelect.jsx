import { TextField, MenuItem } from "@mui/material";
import _ from "lodash";

export default function App(props) {
  return (
    <TextField
      select
      {..._.omit(props, ["option", "fieldValue"])}
      value={props.value}
    >
      {props.option.map((d, ix) => (
        <MenuItem key={ix} value={props.fieldValue ? d[props.fieldValue] : d}>
          {d.name}
        </MenuItem>
      ))}
    </TextField>
  );
}
