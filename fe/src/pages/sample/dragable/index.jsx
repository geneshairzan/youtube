import UI from "@component/gip-ui";
import Draggable from "react-draggable";
import Sector from "./_sector.jsx";

export default function App(props) {
  return (
    <UI.Stack>
      <BackGround />
      <Card className="handle" />
    </UI.Stack>
  );
}

function Card(props) {
  return (
    <Draggable>
      <UI.Stack p={2} border="1px solid black" borderRadius={2} width={180} height={200} {...props}>
        <UI.Text variant="h3">drag me</UI.Text>
      </UI.Stack>
    </Draggable>
  );
}

function BackGround(params) {
  return (
    <UI.Row justifyContent="space-between">
      <Sector title={"sector1"} bgcolor={"#6cb7ff"}>
        Sector2
      </Sector>
    </UI.Row>
  );
}
