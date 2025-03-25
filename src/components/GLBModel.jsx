import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useAnimations } from "@react-three/drei";

export const GLBModel = () => {
  const { scene, animations } = useGLTF("/dancer.glb");
  const three = useThree();
  const ref = useRef(null);

  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    actions["wave"].play();
  }, [scene, actions]);

  useFrame((state, delta) => {
    // ref.current.rotation.y += 0.02;
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={0.01}
      position={[0, 0.8, 0]}
    />
  )
}