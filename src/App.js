import ReactDom from "react-dom";
import React, { useRef, useState } from "react";
import { Canvas, useFrame, extend, useThree } from "react-three-fiber";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { PlaneBufferGeometry } from "three";
import Box from "./Box";

extend({ OrbitControls });

const CameraControls = () => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls component.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls
  const {
    camera,
    gl: { domElement },
  } = useThree();
  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef();
  useFrame((state) => controls.current.update());
  return <orbitControls ref={controls} args={[camera, domElement]} />;
};

function Plane(props) {

  return (
    <mesh
      {...props}
      rotation={[-Math.PI/2, 0, 0]}
      >
        <planeBufferGeometry args={[10, 10]} />
        <meshStandardMaterial color={"blue"} />
    </mesh>
  )
}

function App() {
  return (
    <Canvas>
      <CameraControls />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[0, 0, 0]} />
      <Plane position={[0, -3, 0]} />
    </Canvas>
  );
}

export default App;
