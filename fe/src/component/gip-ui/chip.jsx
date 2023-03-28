import { fabClasses } from "@mui/material";
import Chip from "@mui/material/Chip";
export default function App({
  label = "label",
  small = false,
  sharp = false,
  w = 80,
  ...props
}) {
  return (
    <Chip
      label={label}
      {...props}
      className="f-uppercase f-bold"
      sx={{
        width: w,
        height: small ? 14 : 16,
        pt: small ? "" : "2px",
        fontSize: small ? 8 : 10,
        borderRadius: sharp ? "4px" : "32px",
      }}
    />
  );
}
