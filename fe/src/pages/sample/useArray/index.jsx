import React, { useState, useEffect } from "react";
import useSample from "@component/useSample";
import useArray from "@component/useArray";
// import useArray from "gh-usearray";
import UI from "@component/gip-ui";
import TextField from "@mui/material/TextField";

export default function App(props) {
  const { data } = useSample();
  const dataarr = useArray();

  useEffect(() => {
    data && dataarr.set(data);
  }, [data]);

  function handlePush() {
    dataarr.push({ title: "genesha.dev", category: "react" });
  }

  return (
    <UI.Stack p={3}>
      <UI.Button onClick={handlePush}>Sample push </UI.Button>
      <UI.Row alignItems="center" spacing={2} my={2}>
        <TextField label="search" value={dataarr?.q} onChange={(e) => dataarr.setQ(e?.target?.value)} />
      </UI.Row>

      <UI.Row alignItems="center" spacing={2} my={2}>
        <UI.Text variant="body1" width={50}>
          Action
        </UI.Text>

        <UI.Col width={200}>
          <UI.Button variant="text" onClick={() => dataarr.handleSort("title")}>
            Title
          </UI.Button>
        </UI.Col>
        <UI.Col>
          <UI.Button variant="text" onClick={() => dataarr.handleSort("category")}>
            Category
          </UI.Button>
        </UI.Col>
      </UI.Row>
      {console.log(dataarr.data)}
      <UI.Col>
        {dataarr.data?.map((d) => (
          <UI.Row alignItems="center" spacing={2} key={d.ix}>
            <UI.Col width={42}>
              <UI.IconButton onClick={() => dataarr.pop(d.ix)}>x</UI.IconButton>
            </UI.Col>
            <UI.Col width={200}>
              <TextField value={d?.title} onChange={(e) => dataarr.handleInput(d.ix, "title", e?.target?.value)} />
            </UI.Col>
            <UI.Text variant="body1">{d?.category}</UI.Text>
          </UI.Row>
        ))}
      </UI.Col>
    </UI.Stack>
  );
}
