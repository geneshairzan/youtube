import Typography from "@mui/material/Typography";
import _ from "lodash";

export default function Typo(props) {
  return (
    <Typography
      {..._.omit(props, ["bold"])}
      variant={props.var || props.variant}
      fontStyle={props.italic ? "italic" : ""}
      fontWeight={props.bold ? "bold" : ""}
    >
      {props.children}
    </Typography>
  );
}

export function Title(props) {
  return (
    <Typo {...props} variant="h6">
      {props.children}
    </Typo>
  );
}
export function Subtitle(props) {
  return (
    <Typo {...props} variant="subtitle1">
      {props.children}
    </Typo>
  );
}

export function Caption(props) {
  return (
    <Typo {...props} variant="caption">
      {props.children}
    </Typo>
  );
}
