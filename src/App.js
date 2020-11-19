import ReactDom from "react-dom";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { PlaneBufferGeometry } from "three";

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  })

  return (
    <mesh
      {...props}
      ref={mesh}
      >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'hotpink'} />
    </mesh>
  )
}

function Plane(props) {
  const mesh = useRef();

  return (
    <mesh
      {...props}
      ref={mesh}
      rotation={[-Math.PI/3, 0, 0]}
      position={[0, -3, 0]}
      >
        <planeBufferGeometry args={[10, 10]} />
        <meshStandardMaterial color={"blue"} />
    </mesh>
  )
}

function App() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[0, 0, 0]} />
      <Plane position={[0, 0, 0]} />
    </Canvas>
  );
}

export default App;
