import React, { useState } from "react";
import Layout from "@component/layout";

export default function App(props) {
  const [app, setappvalue] = useState({
    theme: "light",
    layoutDisabled: false,
  });

  function setapp(target, value) {
    setappvalue({ ...app, [target]: value });
  }

  return { app, setapp };
}
