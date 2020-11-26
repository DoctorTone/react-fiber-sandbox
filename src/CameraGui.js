import React from 'react';
import { useThree } from "react-three-fiber";

const CameraGui = () => {

    return (
        <div style={{position: "absolute", right:"5%", bottom:"5%"}}>
            <button>Cam X</button>
        </div>
        
    );
}

export default CameraGui;