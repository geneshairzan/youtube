import UI from "@component/gip-ui";

import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls, Stage } from "@react-three/drei";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { Suspense } from "react";
import Model from "./model";

export default function App(props) {
  return (
    <UI.Stack height={"100vh"}>
      <Canvas>
        <Suspense fallback={"..."}>
          <Stage environment="city" intensity={0.6}>
            <Model color={{ body: "blue", sole: "#ff441d", striped: "yellow" }} />
            <Model
              color={{ body: "#ff441d", sole: "green", striped: "yellow" }}
              rotation={[0, 0.5, Math.PI]}
              scale={-1}
              position={[0.2, 0, -1.2]}
            />
          </Stage>
          <OrbitControls />
        </Suspense>
      </Canvas>
    </UI.Stack>
  );
}
