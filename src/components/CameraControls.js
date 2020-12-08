import React, { useRef, useState, useContext } from "react";
import * as THREE from "three";
import { Canvas, useFrame, extend, useThree } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import useStore from "../states/gui/guiStore";

extend({ OrbitControls });

const camAxis = new THREE.Vector3(0, 1, 0);

const CameraControls = () => {
    // Get a reference to the Three.js Camera, and the canvas html element.
    // We need these to setup the OrbitControls component.
    // https://threejs.org/docs/#examples/en/controls/OrbitControls
    const {
      camera,
      gl: { domElement },
    } = useThree();

    const { cameraRotating, tempVec } = useStore();
    
    // Ref to the controls, so that we can update them on every frame using useFrame
    const controls = useRef();
    useFrame((state) => {
      if (cameraRotating) {
        tempVec.copy(camera.position);
        tempVec.sub(controls.current.target);
        tempVec.applyAxisAngle(camAxis, Math.PI/20 * 0.016);
        camera.position.copy(tempVec);
        camera.position.add(controls.current.target);
      }
      controls.current.update();
    });
    
    return <orbitControls ref={controls} args={[camera, domElement]} />;
  };

  export default CameraControls;