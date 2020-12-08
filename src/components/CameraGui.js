import React, { useContext, useState } from 'react';

import Button from "react-bootstrap/Button";
import useStore from "../states/gui/guiStore";

const CameraGui = () => {
    
    const camRotate = useStore(state => state.rotateCamera);
    const onMouseDown = () => {
        camRotate(true);
    };

    const onMouseUp = () => {
        camRotate(false);
    }
    
    return (
        <div style={{position: "absolute", right:"5%", bottom:"5%"}}>
            <Button onMouseDown={onMouseDown} onMouseUp={onMouseUp}>Cam X</Button>
        </div>
        
    );
}

export default CameraGui;