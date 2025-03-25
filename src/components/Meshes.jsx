import { Box, Circle, Cone, Cylinder, Plane, Sphere, Torus, TorusKnot } from "@react-three/drei";
import * as THREE from "three";

export const Meshes = () => {
//   return (
//       <mesh>
//         <boxGeometry args={[1, 1, 1]} />
//         <meshBasicMaterial color={0xff0000} />
//       </mesh>
//   );
  return (
    <>
      <Plane 
        args={[40, 40]} 
        rotation-x={-Math.PI / 2} 
        receiveShadow
      >
          <meshStandardMaterial color={0xffffff} />
      </Plane>
      {/* <Box 
        args={[1, 1, 1]}
        position={[0, 0.5, 0]}
        castShadow 
      >
          <meshStandardMaterial color={0xff0000} />
      </Box>
      <Sphere
        args={[1]}
        position={[0, 1, 3]}
      >
        <meshStandardMaterial color={0xffff00} />
      </Sphere>
      <Circle
        args={[1]}
        position={[0, 1, -3]}
      >
        <meshStandardMaterial 
          color={"violet"} 
          side={THREE.DoubleSide}
        />
      </Circle>       
      <Cone
        args={[1, 2]}
        position={[3, 1, 3]}
      >
        <meshStandardMaterial color={"brown"} />
      </Cone>
      <Cylinder
        args={[2, 1, 2]}
        position={[3, 1, -3]}
      >
        <meshStandardMaterial color={"pink"} />
      </Cylinder>
      <Torus
        args={[1, 0.2]}
        position={[-3, 1.2, -3]}
      >
        <meshStandardMaterial color={"hotpink"} />
      </Torus> */}
      <TorusKnot
        args={[1, 0.2, 128, 128, 2, 3]}
        position={[-3, 1.6, 0]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial 
          color={0xff0000} 
          roughness={0.5}
          metalness={1}
        />
      </TorusKnot>
      <TorusKnot
        args={[1, 0.2, 128, 128, 2, 3]}
        position={[-7, 1.6, 0]}
        castShadow
        receiveShadow
      >
        <meshLambertMaterial 
          color={0x0abff0} 
          emissive={0xff0000}
          emissiveIntensity={0.5}
        />
      </TorusKnot>
      <TorusKnot
        args={[1, 0.2, 128, 128, 2, 3]}
        position={[-11, 1.6, 0]}
        castShadow
        receiveShadow
      >
        <meshPhongMaterial 
          color={0xff0000} 
          emissive={0x00ff00}
          emissiveIntensity={0.5}
          specular={0x0000ff}
          shininess={100}
        />
      </TorusKnot>
      <TorusKnot
        args={[1, 0.2, 128, 128, 2, 3]}
        position={[-15, 1.6, 0]}
        castShadow
        receiveShadow
      >
        <meshDepthMaterial 
          opacity={0.5}
          transparent={false}
        />
      </TorusKnot>
    </>
  )
};