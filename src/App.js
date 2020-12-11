import ReactDom from "react-dom";
import React, { useEffect, useState, useContext } from "react";
import { Canvas, useFrame, extend, useThree } from "react-three-fiber";

import { PlaneBufferGeometry } from "three";
import Box from "./components/Box";
import CameraControls from "./components/CameraControls";
import CameraGUI from "./components/CameraGui";
import Title from "./components/Title";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

const Plane = (props) => {
  return (
    <mesh {...props} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry args={[10, 10]} />
      <meshStandardMaterial color={"blue"} />
    </mesh>
  );
};

const App = () => {
  useEffect(() => {
    // Init Materalize
    M.AutoInit();
  });

  return (
    <>
      <Title title="Viz Framework" />
      <Canvas>
        <CameraControls />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[0, 0, 0]} />
        <Plane position={[0, -3, 0]} />
      </Canvas>
      <CameraGUI />
    </>
  );
};

export default App;
