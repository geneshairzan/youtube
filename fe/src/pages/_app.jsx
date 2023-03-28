import React, { useState, useEffect } from "react";

import { Outlet } from "react-router-dom";
import Layout from "@component/layout";
import Context from "@/serviceProvider/context";

export default function App(props) {
  // TODO :: controller : access
  const { app } = React.useContext(Context);

  if (app.layoutDisabled) return <Outlet />;

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
