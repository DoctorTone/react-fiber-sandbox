import React from "react";
import * as THREE from "three";
import create from "zustand";

const useStore = create((set) => ({
  tempVec: new THREE.Vector3(),
  cameraRotating: false,
  cameraDirection: 0,
  rotateCamera: (direction) => set({ cameraDirection: direction }),
}));

export default useStore;
