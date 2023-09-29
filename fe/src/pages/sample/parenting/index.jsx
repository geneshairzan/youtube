import UI from "@component/gip-ui";
import C1 from "./comp1";
import C2 from "./comp2";

export default function App(props) {
  return (
    <UI.Stack
      p={2}
      sx={{
        "& .bottonxx": {
          //   border: "unset",
        },
      }}
    >
      {console.log("gip")}
      <C1>
        <C2 />
      </C1>
    </UI.Stack>
  );
}
