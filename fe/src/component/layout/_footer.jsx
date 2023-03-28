import UI from "@component/gip-ui";

export default function App(props) {
  return (
    <UI.Row bgcolor={"primary.main"} minHeight={64} center>
      <UI.Text variant="caption" color="common.white">
        Genesha Dev @ {new Date().getFullYear()}
      </UI.Text>
    </UI.Row>
  );
}
