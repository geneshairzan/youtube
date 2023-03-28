import { useRouteError } from "react-router-dom";
import UI from "@component/gip-ui";

export default function App(props) {
  let error = useRouteError();

  return (
    <UI.Col width="100vw" height={"100vh"} center>
      <UI.Col>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <UI.Text variant="caption" color="error">
          <pre>{error.statusText || error.message}</pre>
        </UI.Text>
      </UI.Col>
    </UI.Col>
  );
}
