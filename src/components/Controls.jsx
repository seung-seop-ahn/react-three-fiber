import { FlyControls, OrbitControls, FirstPersonControls, PointerLockControls, TrackballControls } from "@react-three/drei";

export const Controls = () => {
  return (
    // <OrbitControls
    //   enableDamping
    //   dampingFactor={0.3}
    //   enableZoom
    //   enablePan
    //   enableRotate
    //   autoRotate
    //   autoRotateSpeed={1}
    //   maxPolarAngle={Math.PI / 2}
    //   minPolarAngle={Math.PI / 4}
    //   maxAzimuthAngle={Math.PI / 2}
    //   minAzimuthAngle={Math.PI / 4}
    // />
    // <FlyControls 
    //   movementSpeed={1}
    //   rollSpeed={Math.PI / 2}
    //   // autoForward={true}
    // />
    // <FirstPersonControls
    //   movementSpeed={0.1}
    //   lookSpeed={0.1}
    //   lookVertical={true}
    // />
    // <PointerLockControls />
    <TrackballControls
      rotateSpeed={2}
      zoomSpeed={2}
      panSpeed={2}
      noZoom={false}
      noPan={false}
      noRotate={false}
      staticMoving={false}
      dynamicDampingFactor={0.05}
    />
  )
}