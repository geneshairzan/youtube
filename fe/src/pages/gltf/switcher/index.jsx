import { lazy, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { BakeShadows, OrbitControls, Stage } from "@react-three/drei";
// import Model from "./model";
import Switcher from "./switcher";
import React, { useState } from "react";

const Model = lazy(() => import("./model"));

export default function App() {
  const [active, setactive] = useState({
    body: 0,
    hair: 0,
    teeth: 0,
    eye: 0,
    outfit: 0,
    bottom: 0,
    glasses: 0,
    top: 0,
    footware: 0,
  });
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          flexGrow: 1,
        }}
      >
        <Canvas shadows>
          <Suspense fallback={null}>
            <Stage environment="city" intensity={0.6}>
              <Model active={active} />
            </Stage>
            <BakeShadows />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </div>
      <Switcher onChange={(v) => setactive({ ...active, ...v })} />
    </div>
  );
}
