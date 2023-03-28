import Context from "@/serviceProvider/context";
import ThemeProvider from "./theme";
import React, { useState } from "react";
import useapp from "./reducer/useapp";

export default function App(props) {
  const { app, setapp } = useapp();

  return (
    <Context.Provider
      value={{
        app,
        setapp,
      }}
    >
      <ThemeProvider>{props.children}</ThemeProvider>
    </Context.Provider>
  );
}
