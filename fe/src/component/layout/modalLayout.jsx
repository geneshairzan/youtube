import React from "react";
import { IconButton, Container, Box } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { Divider } from "@material-ui/core";

export default function App(props) {
  return (
    <Box minHeight="100vh" className=" d-flex flex-col ">
      <Box height={56}>
        <Container maxWidth="lg" className="h100 d-flex fh-between fv-center">
          <CloseIcon
            edge="start"
            onClick={() => props.handleClose(true)}
          ></CloseIcon>
          <Box height="56px" className=" center">
            <h5> {props.title}</h5>
          </Box>

          <IconButton disabled={true}></IconButton>
        </Container>
        <Divider />
      </Box>
      {props.children}
    </Box>
  );
}

export function Modal50(props) {
  return (
    <Box minHeight="30vh" className=" d-flex flex-col ">
      {props.children}
    </Box>
  );
}
