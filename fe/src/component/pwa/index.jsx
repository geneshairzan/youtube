import React, { useState, useEffect } from "react";

import UI from "@component/gip-ui";
import { useAddToHomescreenPrompt } from "./pwa";

export default function App(props) {
  const [isshow, setisshow] = useState(false);
  const [prompt, promptToInstall] = useAddToHomescreenPrompt();

  React.useEffect(() => {
    if (!prompt) console.log("not pormt");

    if (prompt) {
      console.log("on pormt");
      setisshow(true);
    }
  }, [prompt]);

  return (
    <UI.Stack
      display={isshow ? "flex" : "none"}
      position="fixed"
      right={64}
      bottom={100}
      zIndex={99}
    >
      <UI.Stack
        border={"3px solid black"}
        spacing={1}
        borderRadius={2}
        p={1}
        bgcolor="secondary.main"
        sx={{
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        }}
        width="220px"
      >
        <UI.Col
          position={"absolute"}
          top={-16}
          right={-16}
          width="30px"
          zIndex={99}
        >
          <UI.IconButton
            color="white"
            variant="contained"
            sx={{
              bgcolor: "white.main",
              color: "black",
              border: "1px solid black",
              zIndex: 100,
              "&:hover": {
                bgcolor: "white.main",
              },
            }}
            size="small"
            onClick={() => setisshow(false)}
          >
            X
          </UI.IconButton>
        </UI.Col>

        <UI.Text variant="h6">
          Do you want to install as Mobile Application ?{" "}
        </UI.Text>
        <UI.Button onClick={promptToInstall}>Install</UI.Button>
      </UI.Stack>
    </UI.Stack>
  );
}
