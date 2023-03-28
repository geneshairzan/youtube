import UI from "@component/gip-ui";
import Form from "@component/gip-form";

import FilterAltIcon from "@mui/icons-material/FilterAlt";

import React from "react";

import {
  Stack,
  Typography,
  Menu,
  MenuItem,
  IconButton,
  Avatar,
  Button,
  Divider,
  Badge,
  ListItem,
  ListItemButton,
} from "@mui/material";

export default function App(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <UI.Stack>
      <UI.Button
        color="secondary"
        startIcon={<FilterAltIcon />}
        onClick={handleClick}
      >
        Filter
      </UI.Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        // sx={{
        //   left: "-80px",
        // }}
        // anchorOrigin={{
        //   vertical: "top",
        //   horizontal: "left",
        // }}
      >
        <Stack maxWidth={320} width="100vw" p={1} spacing={1}>
          <Form.Finder />
          <Form.Finder />
          <Form.Finder />
          <UI.Button variant="text" className="f-capitalize" fullWidth>
            Filter
          </UI.Button>
        </Stack>
      </Menu>
    </UI.Stack>
  );
}
