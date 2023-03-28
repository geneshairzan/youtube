import React, { useState, useEffect } from "react";

import UI from "@component/gip-ui";
//https://fidisys.com/blog/serial-port-devices/
//https://web.dev/serial/
//https://codelabs.developers.google.com/codelabs/web-serial#3
//https://github.com/autodrop3d/serialTerminal.com

export default function App(props) {
  const textDecoder = new TextDecoderStream();
  const [port, setport] = useState();
  const [buffer, setbuffer] = useState("");
  const [result, setresult] = useState("");
  const [result2, setresult2] = useState("");
  async function listenUSB() {
    let port = await navigator.serial.requestPort();
    await port.open({ baudRate: 115200 });
    setport(port);
  }

  async function doRead() {
    while (port.readable) {
      const textDecoder = new TextDecoderStream();
      const readableStreamClosed = port.readable.pipeTo(textDecoder.writable);
      const reader = textDecoder.readable.getReader();
      let temp = "";
      while (true) {
        const { value, done } = await reader.read();
        setbuffer((p) => p + value);
        temp = temp + value;
        if (done) {
          setresult2("temp");
          // Allow the serial port to be closed later.

          reader.releaseLock();
          break;
        }
        // value is a string will be streaming here.
      }
    }
  }

  useEffect(() => {
    if (port) {
      console.log(port.getInfo());
      console.log(port);
      console.log(navigator.serial);

      doRead();

      navigator.serial.getPorts().then((ports) => {
        // Initialize the list of available ports with `ports` on page load.
        console.log(ports);
      });
    }
  }, [port]);

  useEffect(() => {
    let temp = buffer;
    if (buffer.includes("\n")) {
      setbuffer("");
      setresult(temp);
    }
  }, [buffer]);

  return (
    <UI.Stack p={5}>
      {"serial" in navigator ? (
        <UI.Text variant="body1">Browsert Supported</UI.Text>
      ) : (
        <UI.Text variant="body1">Browsert NOT Supported</UI.Text>
      )}

      <UI.Text variant="body1">res2 : {result2}</UI.Text>
      <UI.Text variant="body1">res : {result}</UI.Text>
      <UI.Text variant="body1">buffer : {buffer}</UI.Text>
      {!port && <UI.Button onClick={listenUSB}>test</UI.Button>}
    </UI.Stack>
  );
}
