import React, { useState, useEffect } from "react";
import UI from "@component/gip-ui";
import ThemeChanger from "@component/themeChanger";
import Context from "@/serviceProvider/context";

import { data } from "./_data";

//https://miro.medium.com/max/1400/1*8BtlgpxyjOPaLZXO6pVD0Q.jpeg

export default function App(props) {
  const [selected, setselected] = useState(1);
  const { setapp } = React.useContext(Context);

  useEffect(() => {
    setapp("layoutDisabled", true);
  }, []);

  return (
    <UI.Stack position={"relative"}>
      <UI.Stack
        position={"fixed"}
        width="100vw"
        height={"100vh"}
        bgcolor="grey.a"
      >
        <Datadisplay data={data.find((d) => d.id == selected)} />
      </UI.Stack>
      <UI.Stack minHeight={"100vh"} width="100vw" position={"absolute"} top={0}>
        <Datarow
          mt={"calc(100vh - 340px)"}
          data={data}
          setSelected={(v) => setselected(v)}
        />
        <Datarow mt={2} data={data} setSelected={(v) => setselected(v)} />

        <Datarow mt={2} data={data} setSelected={(v) => setselected(v)} />
      </UI.Stack>
    </UI.Stack>
  );
}

function Datadisplay({ data }) {
  const [buffer, setbuffer] = useState();

  useEffect(() => {
    setbuffer();
  }, [data]);

  useEffect(() => {
    setbuffer(data);
  }, [buffer]);

  return (
    <>
      <UI.Col
        spacing={3}
        p={3}
        position="absolute"
        width="30vw"
        height="100%"
        color="white.main"
        sx={{
          bgcolor: " rgba(0, 0, 0,.6)",
          // background: `linear-gradient(to right,  rgba(0, 0, 0,.9) 0%,rgba(0, 0, 0,.4) 60%, rgba(0, 0, 0,0) 100%)`,
        }}
      >
        <UI.Text variant="h2">{data.title}</UI.Text>
        <UI.Text variant="body1">{data.desc}</UI.Text>
        <UI.Button>Action Button</UI.Button>
      </UI.Col>
      {buffer && (
        <UI.Stack
          sx={{
            // display: "none",
            zIndex: -1,
            animation: "fadeInAnimation ease 2s",
            height: "100%",
          }}
        >
          <img
            src={data.img}
            alt=""
            style={{
              height: "100%",
              objectFit: "cover",
            }}
          />
        </UI.Stack>
      )}
    </>
  );
}

function Datarow(props) {
  return (
    <UI.Stack
      direction={"row"}
      mt={props.mt}
      spacing={1}
      sx={{
        overflowX: "auto",
        p: 1,
      }}
    >
      {props.data.map((d) => (
        <Card key={d.id} data={d} setSelected={props.setSelected} />
      ))}
    </UI.Stack>
  );
}

function Card({ data, setSelected }) {
  return (
    <UI.Stack
      width={200}
      height={300}
      bgcolor="primary.main"
      flexShrink={0}
      onClick={() => setSelected(data.id)}
      position="relative"
    >
      <UI.Stack position={"absolute"} height="100%" width={"100%"}>
        <img
          src={data.img}
          alt=""
          style={{
            height: "100%",
            objectFit: "cover",
          }}
        />
      </UI.Stack>

      <UI.Stack
        position={"absolute"}
        bottom={0}
        bgcolor={"rgba(50, 50, 93, 0.25)"}
        sx={
          {
            // background: `linear-gradient(to top,  rgba(0, 0, 0,.9) 0%,rgba(0, 0, 0,.4) 60%, rgba(0, 0, 0,0) 100%)`,
          }
        }
      >
        <UI.Text variant="h6" color="white.main" p={1}>
          {data.id}-{data.title}
        </UI.Text>
      </UI.Stack>
    </UI.Stack>
  );
}
