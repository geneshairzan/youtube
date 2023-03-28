import UI from "@component/gip-ui";
import Graph from "./graph";

export default function App(props) {
  return (
    <UI.Stack p={5} spacing={5}>
      <Graph score={50} />
      <Graph
        score={40}
        bgcolor="#555666"
        label={[
          { name: "bad", w: 0.1 },
          { name: "not good", w: 0.2 },
          { name: "avg", w: 0.2 },
          { name: "good", w: 0.3 },
          { name: "best", w: 0.2 },
        ]}
      />
      <Graph
        score={40}
        bgcolor="red"
        label={[
          { name: "bad", w: 0.1 },
          { name: "not good", w: 0.1 },
          { name: "avg", w: 0.1 },
          { name: "good", w: 0.2 },
          { name: "best", w: 0.2 },
          { name: "super", w: 0.15 },
          { name: "ultra", w: 0.15 },
        ]}
      />
    </UI.Stack>
  );
}
