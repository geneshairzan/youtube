// import SvgIcon from "@mui/material/SvgIcon";
// import { ReactComponent as MyIcon } from "@mui/material/SvgIcon";
import SvgIcon from "@mui/material/SvgIcon";
import Icon from "@mui/material/Icon";
function IconRender({ w = 18, ...props }) {
  return <img src={props.src} style={{ width: w, height: w, ...props.sx }} />;
}

export default function IconRenderA({ w = 18, src, ...props }) {
  // return <SvgIcon component={props.src} viewBox="0 0 71 55" />;
  return (
    <>
      <src />
      <SvgIcon
        component={src}
        inheritViewBox
        // fill="red"
        color="error"
        htmlColor="#aa0011"
        // htmlColor: '#aa0011',
        // {...props}
        // sx={{ color: "secodary", fill: "#f48225" }}
      />
    </>
  );
}
