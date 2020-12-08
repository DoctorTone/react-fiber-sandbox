import React from 'react';
import create from "zustand";

const useStore = create((set) => ({
    cameraRotating: false,
    setCameraRotate: status => set(( state ) => ({ cameraRotating: status }))
}));

export default useStore;
