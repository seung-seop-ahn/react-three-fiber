import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";

export const GLBModel = () => {
  const { scene, animations } = useGLTF("/dancer.glb");
  const ref = useRef(null);

  const [currentAnimation, setCurrentAnimation] = useState("wave");
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

  }, [scene]);

  useEffect(() => {
    actions[currentAnimation].fadeIn(0.5).play();
    return () => {
      actions[currentAnimation].fadeOut(0.5).stop();
    };
  }, [currentAnimation, actions]);

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={0.01}
      position={[0, 0.8, 0]}
      onPointerUp={() => console.log("up")}
      onPointerDown={() => console.log("down")}
      onClick={() => {
        setCurrentAnimation((prev) => {
          if (prev === "wave") return "windmill"
          return "wave"
        })
      }
      }
    />
  )
}