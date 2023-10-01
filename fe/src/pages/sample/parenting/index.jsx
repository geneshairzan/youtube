import React, { useState, useEffect } from "react";

import UI from "@component/gip-ui";
import C1 from "./comp1";
import C2 from "./comp2";

export default function App(props) {
  const [state, setstate] = useState("genesha");

  function loader(params) {
    let gip = "genesha";
    console.log(">  gip", gip);
  }

  useEffect(() => {
    loader();
  }, []);

  return (
    <UI.Stack
      p={2}
      sx={{
        "& .bottonxx": {
          //   border: "unset",
        },
      }}
    >
      <C1>
        <C2 />
      </C1>
    </UI.Stack>
  );
}
