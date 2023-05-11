import UI from "@component/gip-ui";

export default function App(props) {
  return (
    <UI.Stack sx={{ flexGrow: 1, flexBasis: 1 }}>
      <UI.Text variant="body1">{props.title}xx</UI.Text>
    </UI.Stack>
  );
}
