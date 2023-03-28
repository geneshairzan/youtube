import React, { useState, useEffect } from "react";

import UI from "@component/gip-ui";

export default function App(props) {
  const [keypressed, setkeypressed] = useState("not pressed");

  function handlekeydownEvent(event) {
    const { key, keyCode } = event;
    setkeypressed(`${keyCode}-${key}`);
  }

  useEffect(() => {
    document.addEventListener("keydown", handlekeydownEvent);
    return () => {
      document.removeEventListener("keydown", handlekeydownEvent);
    };
  }, []);

  return (
    <UI.Stack p={5}>
      <UI.Text variant="body1">{keypressed}</UI.Text>
    </UI.Stack>
  );
}
