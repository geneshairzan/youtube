import React from "react";

import PWA from "@/component/pwa";
import UI from "@component/gip-ui";

export const meta = {
  title: "home2",
  icon: "thisIcon",
  order: 1,
};

export default function App(props) {
  return (
    <UI.Stack>
      <PWA />
    </UI.Stack>
  );
}
