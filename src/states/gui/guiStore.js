import React from 'react';
import * as THREE from "three";
import create from "zustand";

const useStore = create((set) => ({
    tempVec: new THREE.Vector3(),
    cameraRotating: false,
    toggleCameraRotate: () => set(( state ) => ({ cameraRotating: !state.cameraRotating })),
    rotateCamera: (status) => set({ cameraRotating: status })
}));

export default useStore;
