import { Canvas } from "@react-three/fiber";
import { Color } from "three";
import { OrbitControls } from "@react-three/drei";
import { Meshes } from "./Meshes";
import { Lights } from "./Lights";

export const MainCanvas = () => {
  return (
    <Canvas
        gl={{ antialias: true }} 
        camera={{
            fov: 60,
            aspect: window.innerWidth / window.innerHeight,
            near: 0.1,
            far: 100,
            position: [5, 5, 5],
        }}
        scene={{
            background: new Color(0x000000),
        }}
        shadows={"soft"}
        // shadows={{
        //     type: THREE.PCFSoftShadowMap,
        //     enabled: true,
        // }} 
    >
      <OrbitControls />
      <Lights />
      <Meshes />
    </Canvas>
  );
};
