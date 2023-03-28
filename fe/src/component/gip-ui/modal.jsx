import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import UI from "@component/gip-ui";

export default function BasicModal(props) {
  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      sx={{
        backdropFilter: "blur(3px)",
      }}
    >
      <UI.Stack
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "calc(100vw - 200px)",
          minWidth: 1200,
          minHeight: 600,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 3,
          borderRadius: 5,
        }}
      >
        {props.children}
      </UI.Stack>
    </Modal>
  );
}
