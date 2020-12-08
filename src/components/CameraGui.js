import React, { useContext, useState } from 'react';

import Button from "react-bootstrap/Button";
import useStore from "../states/gui/guiStore";

const CameraGui = () => {
    
    const toggleCamera = useStore(state => state.toggleCameraRotate);
    const onClick = () => {
        toggleCamera();
    }
    
    return (
        <div style={{position: "absolute", right:"5%", bottom:"5%"}}>
            <Button onClick={onClick}>Cam X</Button>
        </div>
        
    );
}

export default CameraGui;