import UI from "@component/gip-ui";
import Logox from "./bbb.svg";

export default function App(props) {
  return (
    <UI.Stack
      sx={{
        "& img:hover": {
          opacity: 0.7,
        },
      }}
    >
      <img
        src={Logox}
        style={{
          width: 24,
          height: 24,
        }}
        alt=""
      />
    </UI.Stack>
  );
}
