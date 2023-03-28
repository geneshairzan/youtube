// import React, { useState, useEffect } from "react";

// import UI from "@component/gip-ui";

// // const bufferSize = 1024;
// // let buffer = new ArrayBuffer(bufferSize);

// export default function App (props) {
//   const textDecoder = new TextDecoderStream();

//   const [port, setport] = useState();
//   // const [reader, setreader] = useState();

//   async function listenUSB() {
//     let port = await navigator.serial.requestPort();
//     await port.open({ baudRate: 115200 });
//     setport(port);
//   }

//   async function doRead() {
//     while (port.readable) {
//       const reader = port.readable.getReader();
//       let temp = "gogo";

//       try {
//         while (true) {
//           const { value, done } = await reader.read();
//           if (done) {
//             // |reader| has been canceled.
//             break;
//           }
//           var str = new TextDecoder().decode(value.buffer);
//           // var json = JSON.parse(str);
//           temp = +str;
//           // console.log(str);
//           // Do something with |value|...
//         }
//       } catch (error) {
//         // Handle |error|...
//       } finally {
//         console.log(temp);
//         console.log("reader close");
//         reader.releaseLock();
//       }
//     }

//     // const textDecoder = new TextDecoderStream();
//     // const readableStreamClosed = port.readable.pipeTo(textDecoder.writable);
//     // const reader = textDecoder.readable.getReader();

//     // let buffer = "";

//     // // Listen to data coming from the serial device.
//     // while (true) {
//     //   const { value, done } = await reader.read();
//     //   if (done) {
//     //     // Allow the serial port to be closed later.
//     //     console.log("buf", buffer);

//     //     reader.releaseLock();
//     //     break;
//     //   }
//     //   // value is a string.
//     //   buffer = +value;
//     //   console.log("va", value);
//     // }
//   }

//   useEffect(() => {
//     if (port) {
//       // const readableStreamClosed = port.readable.pipeTo(textDecoder.writable);
//       // setreader(textDecoder.readable.getReader());
//       doRead();
//     }
//   }, [port]);

//   if (port) {
//     while (port.readable) {
//       let reader = port.readable.getReader();
//         while (true) {
//            const { value, done } = await reader.read();
//       if (done) {
//         // Allow the serial port to be closed later.
//         reader.releaseLock();
//         break;
//       }
//       if (value) {
//         console.log(value);
//       }
//         }

//     }
//   }

//   return (
//     <UI.Stack p={5}>
//       <UI.Text variant="body1"></UI.Text>
//       {!port && <UI.Button onClick={listenUSB}>test</UI.Button>}
//     </UI.Stack>
//   );
// }
