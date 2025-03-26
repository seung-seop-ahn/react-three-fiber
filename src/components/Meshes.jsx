import { Box, Circle, Cone, Cylinder, Plane, Sphere, Torus, TorusKnot } from "@react-three/drei";
import { useBox, useSphere } from "@react-three/cannon";
import * as THREE from "three";
import { useEffect } from "react";
export const Meshes = () => {

  const [planeRef] = useBox(() => ({
    args: [50, 1, 50],
    type: "Static",
    mass: 1,
    position: [0, 0, 0],
    material: {
      friction: 1,
      restitution: 0.5,
    },
    onCollide: (e) => {
      console.log("collide", e);
    },
  }));

  const [boxRef, api] = useBox(() => ({
    args: [1, 1, 1],
    mass: 1,
    position: [-1, 2, 0],
    material: {
      friction: 0.2,
      restitution: 0.4,
    },
    onCollide: (e) => {
      console.log("collide", e);
    },
  }));

  const [sphereRef1, sphereApi1] = useSphere(() => ({
    mass: 5,
    position: [0.5, 8, 0],
    material: {
      friction: 0.1,
      restitution: 0.4,
    },
    onCollide: (e) => {
      console.log("collide", e);
    },
  }));

  const [sphereRef2] = useSphere(() => ({
    mass: 0.2,
    position: [1, 5, 0],
    material: {
      friction: 0.1,
      restitution: 0.2,
    },
    onCollide: (e) => {
      console.log("collide", e);
    },
  }));

  useEffect(() => {
    api.applyForce([555, 50, 0], [1, 0, 0]);
    sphereApi1.applyLocalForce([-2000, 50, 0], [1, 0, 0]);
  }, [api, sphereApi1]);

  
  useEffect(() => {
    const timeout = setTimeout(() => {
      api.applyLocalImpulse([0, 20, 0], [1, 0, 0]);
      sphereApi1.applyImpulse([200, 10, 0], [0, 0, 0]);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [api, sphereApi1]);
      
  return (
    <>
      <Box
        ref={planeRef}
        args={[50, 1, 50]}
        position={[0, 0, 0]}
      >
        <meshStandardMaterial
          color={0xfefefe}
          roughness={0.2}
          metalness={0.8}
        />
      </Box>
      <Box
        ref={boxRef}
        args={[1, 1, 1]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial
          color={0xff0000}
          roughness={0.3}
          metalness={0.8}
        />
      </Box>
      <Sphere
        ref={sphereRef1}
        args={[1, 32, 32]}
        position={[0, 1, 0]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial
          color={0x9000ff}
          roughness={0.3}
          metalness={0.8}
        />
      </Sphere>
      <Sphere
        ref={sphereRef2}
        args={[1, 32, 32]}
        position={[0, 1, 0]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial
          color={0xff00ff}
          roughness={0.3}
          metalness={0.8}
        />
      </Sphere>
      {/* <Plane 
        args={[40, 40]} 
        rotation-x={-Math.PI / 2} 
        receiveShadow
      >
          <meshStandardMaterial color={0xffffff} />
      </Plane>
      <TorusKnot
        args={[1, 0.2, 128, 128, 2, 3]}
        position={[3, 1.6, 0]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial 
          color={0xffff00}
          roughness={0.2}
          metalness={0.5}
          emissive={0xffff00}
          emissiveIntensity={2}
        />
      </TorusKnot> */}
    </>
  )
};