import React, { useState, useEffect } from "react";

import UI from "@component/gip-ui";
import Draggable from "react-draggable";

export default function App(props) {
  const [activePerson, setactivePerson] = useState();
  const [person, setperson] = useState([
    { id: 0, name: "joni", color: "#227C9D", pos: [0, 0] },
    { id: 1, name: "eko", color: "#17C3B2", pos: [0, 0] },
    { id: 2, name: "budi", color: "#FFCB77", pos: [0, 0] },
    { id: 3, name: "susi", color: "#FFCB77", pos: [0, 0] },
    { id: 4, name: "susanti", color: "#FE6D73", pos: [0, 0] },
  ]);

  useEffect(() => {  }, [])

  const handleClick = (e) => {
    let rect = e.currentTarget.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    let temp = person;
    temp.find((d) => d.id == activePerson.id).pos = [x, y];
    setperson([...temp]);
  };

  return (
    <UI.Col center flexGrow={1} spacing={2}>
      <UI.Row width={960} spacing={2}>
        {person.map((d) => (
          <UI.Button onClick={() => setactivePerson(d)} color={activePerson?.id == d?.id ? "secondary" : "primary"}>
            <UI.Circle
              bg={d.color}
              w={12}
              sx={{
                mr: 1,
              }}
            />
            {d.name}
          </UI.Button>
        ))}
      </UI.Row>
      <UI.Col width={960} height="70vh" bgcolor="#80898f" onClick={handleClick} position="relative">
        {person.map((d) => (
          <UI.Circle
            bg={d.color}
            sx={{
              position: "absolute",
              left: d.pos[0],
              top: d.pos[1],
              display: d.pos[0] == 0 ? "none" : "flex",
              // display: "none",
            }}
          />
        ))}
      </UI.Col>
    </UI.Col>
  );
}

function Component() {
  const onMouseMove = (e) => {
    let rect = e.currentTarget.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    console.log(x, y);
  };
  return (
    <div onMouseMove={onMouseMove}>
      <div>A</div>
      <div>B</div>
      <div>C</div>
    </div>
  );
}
