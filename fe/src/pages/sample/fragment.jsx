import UI from "@component/gip-ui";

import React from "react";

export default function App({ n = 5 }) {
  return (
    <UI.Stack>
      {[...Array(n)].map((e, i) => (
        <React.Fragment key={i}>
          <UI.Text variant="h2">{i}</UI.Text>
          <UI.Text variant="caption">caption</UI.Text>
        </React.Fragment>
      ))}
    </UI.Stack>
  );
}
