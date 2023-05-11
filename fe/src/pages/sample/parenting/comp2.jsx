import UI from "@component/gip-ui";

export default function App(props) {
  return (
    <UI.Stack>
      <UI.Stack border={"1px solid black"} className="bottonxx">
        {props.children}
        div
      </UI.Stack>
    </UI.Stack>
  );
}
