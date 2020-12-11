import React, { useRef, useState, useContext } from "react";
import * as THREE from "three";
import { Canvas, useFrame, extend, useThree } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import useStore from "../states/gui/guiStore";

extend({ OrbitControls });

const camAxes = [
  new THREE.Vector3(0, 0, 0), //STOP
  new THREE.Vector3(0, 1, 0), //LEFT
  new THREE.Vector3(0, 1, 0), //RIGHT
  new THREE.Vector3(1, 0, 0), //UP
  new THREE.Vector3(1, 0, 0), //DOWN
];

const INCREMENT = Math.PI / 20;
const DELTA = 0.016;

const CameraControls = () => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls component.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls
  const {
    camera,
    gl: { domElement },
  } = useThree();

  const { cameraDirection, tempVec } = useStore();
  const direction = cameraDirection !== 2 && cameraDirection !== 4 ? 1 : -1;

  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef();
  useFrame((state) => {
    if (cameraDirection !== 0) {
      tempVec.copy(camera.position);
      tempVec.sub(controls.current.target);
      tempVec.applyAxisAngle(
        camAxes[cameraDirection],
        direction * INCREMENT * DELTA
      );
      camera.position.copy(tempVec);
      camera.position.add(controls.current.target);
    }
    controls.current.update();
  });

  return <orbitControls ref={controls} args={[camera, domElement]} />;
};

export default CameraControls;
