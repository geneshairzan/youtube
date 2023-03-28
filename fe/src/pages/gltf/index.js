import { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Stage, CameraShake, useAnimations } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
// import { Environment, OrbitControls } from "@react-three/drei";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// Handling controls in Threejs is hard bc 3rd party components that change the camera need to know
// about controls, or else all changes are overwritten. That is the case for both <Stage and <CameraShake.
// In latest R3F controls can be set as the default so that other parts of the app may react to it.
// By setting <OrbitControls makeDefault <Stage and <CameraShake are aware of the controls being used.
// Should your own components rely on default controls, throughout the three they're available as:
//   const controls = useThree(state => state.controls)

const grouplScale = [0.2, 0.2, 0.2];
const modelScale = [0.2, 0.2, 0.2];

function Model(props) {
  const group = useRef();
  // const model = useLoader(GLTFLoader, "/model/sample.gltf");
  const model = useGLTF("/model/sample.gltf");
  const saber = useGLTF("/model/girl.gltf");
  // const animation = useLoader(FBXLoader, "/animation/shuffling.fbx");

  // const { actions } = useAnimations(animation.animations, group);

  // const { actions } = useAnimations(fbx, scene);

  console.log(model);
  useEffect(() => {
    // console.log("actions", actions);
    // actions.Armada.play();
    // actions.Idle.play();
    // scene.traverse((obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true));
  });

  // return <primitive object={model.scene} />;

  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        {/* <mesh
          castShadow
          receiveShadow
          geometry={saber.nodes.F010_Saber_Hair001.geometry}
          material={saber.materials["F010_SaberSG.001"]}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={saber.nodes.F010_Saber_Body.geometry}
          material={saber.materials["saber-pure-body"]}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={saber.nodes.Saber_maid_dress.geometry}
          material={saber.materials["F010_SaberSG"]}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={saber.nodes.F010_Saber_Face.geometry}
          material={saber.materials["face.001"]}
        /> */}
        {/* <mesh
          castShadow
          receiveShadow
          geometry={model.nodes.Boy01_Body_Geo.geometry}
          material={model.materials.Boy01_Body_MAT1}
        /> */}
        {/* <skinnedMesh material={materials.Ch03_Body} geometry={nodes.Ch03.geometry} skeleton={nodes.Ch03.skeleton} /> */}
      </group>
    </group>
  );
}

export default function Viewer() {
  return (
    <div
      style={{
        backgroundColor: "grey",
        flexGrow: 1,
        height: "100vh",
      }}
    >
      <Canvas
        shadows
        // camera={{ fov: 1000 }}
        // style={{
        //   height: "100%",
        // }}
        // camera={{ fov: 200, zoom: 1.3, near: 1, far: 100000 }}
      >
        <Suspense fallback={null}>
          <Model />

          <Stage contactShadow={{ opacity: 1, blur: 2 }}></Stage>
        </Suspense>
        <OrbitControls makeDefault />
        {/* <CameraShake
          maxYaw={0.1} // Max amount camera can yaw in either direction
          maxPitch={0.1} // Max amount camera can pitch in either direction
          maxRoll={0.1} // Max amount camera can roll in either direction
          yawFrequency={0.1} // Frequency of the the yaw rotation
          pitchFrequency={0.1} // Frequency of the pitch rotation
          rollFrequency={0.1} // Frequency of the roll rotation
          intensity={1} // initial intensity of the shake
          decayRate={0.65} // if decay = true this is the rate at which intensity will reduce at />
        /> */}
      </Canvas>
    </div>
  );
}
