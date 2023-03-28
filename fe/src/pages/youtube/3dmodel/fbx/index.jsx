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
          <Stage intensity={0.6}>
            <Model />
          </Stage>
        </Suspense>
        <OrbitControls />
      </Canvas>
    </UI.Stack>
  );
}
