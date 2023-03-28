import React, { useState } from "react";

import UI from "@component/gip-ui";

import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import { nav } from "./_nav";
import { Link } from "react-router-dom";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

export default function App(props) {
  const [open, setopen] = React.useState(false);
  const [detail, setdetail] = React.useState();

  return (
    <UI.Stack
      direction="row"
      position={"fixed"}
      justifyContent={"space-between"}
      width="100vw"
      px={2}
      top={0}
      bgcolor="common.white"
      sx={{
        boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px",
      }}
    >
      <UI.Col center>
        <UI.IconButton onClick={() => setopen(true)}>
          <MenuIcon />
        </UI.IconButton>
      </UI.Col>
      <UI.Logo h={48} />

      <Drawer anchor={"left"} open={open} onClose={() => setopen(false)}>
        <UI.Stack minWidth={320} pt={5}>
          {nav.map((d, ix) => (
            <React.Fragment key={ix}>
              {d.child.length == 1 ? (
                <Render data={d.child[0]} setopen={setopen} />
              ) : (
                <RenderGroup
                  data={d}
                  setopen={setopen}
                  isExpand={detail == d.group}
                  setdetail={setdetail}
                />
              )}
            </React.Fragment>
          ))}
        </UI.Stack>
      </Drawer>
    </UI.Stack>
  );
}

function RenderGroup({ data, setopen, setdetail, isExpand }) {
  return (
    <>
      <UI.ListItemButton onClick={() => setdetail(isExpand ? "" : data.group)}>
        <UI.Row justifyContent="space-between" width="100%">
          <UI.Text
            variant="body1"
            sx={{
              textTransform: "capitalize",
            }}
          >
            {data.group}
          </UI.Text>
          {isExpand ? <ExpandLess /> : <ExpandMore />}
        </UI.Row>
      </UI.ListItemButton>
      <Collapse in={isExpand} timeout="auto" unmountOnExit>
        <UI.Col pl={2}>
          {data.child.map((dx, ix) => (
            <Render key={ix} data={dx} setopen={setopen} />
          ))}
        </UI.Col>
      </Collapse>
    </>
  );
}

function Render({ data, setopen }) {
  return (
    <UI.ListItemButton
      component={Link}
      to={data.path}
      onClick={() => setopen(false)}
    >
      <UI.Text
        variant="body1"
        sx={{
          textTransform: "capitalize",
        }}
      >
        {data.title}
      </UI.Text>
    </UI.ListItemButton>
  );
}
