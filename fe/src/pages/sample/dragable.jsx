import UI from "@component/gip-ui";
import Draggable from "react-draggable";

export default function App(props) {
  return (
    <UI.Col center flexGrow={1}>
      <UI.Col width={960} height="70vh" bgcolor="#80898f">
        <Draggable>
          <UI.Circle bg="error.main" />
        </Draggable>

        <Draggable defaultPosition={{ x: 100, y: 200 }}>
          <UI.Circle bg="#e36209" />
        </Draggable>
      </UI.Col>
    </UI.Col>
  );
}
