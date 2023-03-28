import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppServiceProvider from "./appServiceProvider";

import App from "@pages/_app";
import Page404 from "@pages/404";
import Page500 from "@pages/500";

// const Pages = import.meta.globEager("@/pages/**/[a-z[]*.jsx");
const Pages = import.meta.globEager("@/pages/**/[a-z[]*.jsx");

const RouterList = Object.keys(Pages)
  .map((route) => {
    const path = route
      .replace("../pages", "")
      .replace(/\/src\/pages|index|\.jsx$/g, "")
      .replace(/\[\.{3}.+\]/, "*")
      .replace(/\[(.+)\]/, ":$1");
    const Element = Pages[route].default;
    return { path, element: <Element /> };
  })
  .filter((d) => !d.path.includes("_"));

const router = createBrowserRouter([
  {
    element: <App />,
    children: [...RouterList],
    errorElement: <Page500 />,
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);

export default function Router(params) {
  return (
    <AppServiceProvider>
      <RouterProvider router={router} />
    </AppServiceProvider>
  );
}
