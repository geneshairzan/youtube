import React, { useState, useEffect } from "react";

import UI from "@component/gip-ui";

export default function App(props) {
  const [state, setstate] = useState(true);
  const [state2, setstate2] = useState(true);
  // useeffect
  // 1. every time componenet re/render
  // 2. on state changes / state listener
  // 3. on component initiate

  useEffect(() => {
    // 1. every time componenet re/render
    // console.log("effect called - always called");
  });

  useEffect(() => {
    // 2. on state changes / state listener
    console.log("effect called - on state changes ");
    setstate2(state);
  }, [state]);

  useEffect(() => {
    // 3. on component initiate
    console.log("effect called - on component initiate ");
  }, []);

  return (
    <UI.Stack p={5}>
      <UI.Text variant="body1">
        {state ? "state : true" : "state : false"}
      </UI.Text>
      <UI.Text variant="body1">
        {state2 ? "state2 : true" : "state2 : false"}
      </UI.Text>
      <UI.Button onClick={() => setstate(!state)}>sample</UI.Button>
    </UI.Stack>
  );
}
