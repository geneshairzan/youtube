import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { BakeShadows, OrbitControls, Stage } from "@react-three/drei";
import Shoe from "./shoe";

export default function App() {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 150], fov: 40 }}>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <Shoe color="tomato" position={[0, 0, 0]} />
            <Shoe color="#ffffff" scale={-1} rotation={[0, 0.5, Math.PI]} position={[0, 0, -2]} />
          </Stage>
          <BakeShadows />
        </Suspense>
        <OrbitControls autoRotate />
      </Canvas>
    </div>
  );
}
