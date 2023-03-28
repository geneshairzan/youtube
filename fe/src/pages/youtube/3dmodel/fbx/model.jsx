import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { useFBX } from "@react-three/drei";

export default function Model(params) {
  const fbx = useFBX("/model/sample/sample.fbx");

  console.log(fbx);

  return (
    <group>
      <primitive object={fbx} scale={0.005} />
    </group>
  );
}
