import React from 'react';
import * as THREE from "three";
import create from "zustand";

const useStore = create((set) => ({
    tempVec: new THREE.Vector3(),
    cameraRotating: true,
    setCameraRotate: status => set(( state ) => ({ cameraRotating: status }))
}));

export default useStore;
