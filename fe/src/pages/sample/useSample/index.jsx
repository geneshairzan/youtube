import React, { useState, useEffect } from "react";
import useSample from "@component/useSample";
import UI from "@component/gip-ui";

export default function App(props) {
  const sample = useSample();

  return (
    <UI.Stack p={3}>
      <UI.Button onClick={() => sample.refetch("https://dummyjson.com/users", "users")}>get user</UI.Button>
      <UI.Col>
        {sample?.data?.map((d, ix) => (
          <UI.Row>
            <UI.Text variant="body1" minWidth={300}>
              {d?.title || d?.firstName}
            </UI.Text>
            <UI.Text variant="body1">{d?.category || d?.gender}</UI.Text>
          </UI.Row>
        ))}
      </UI.Col>
    </UI.Stack>
  );
}
