import React, { useContext, useState } from 'react';

import Button from "react-bootstrap/Button";

const CameraGui = () => {
    
    const onClick = () => {

    }
    
    return (
        <div style={{position: "absolute", right:"5%", bottom:"5%"}}>
            <Button onClick={onClick}>Cam X</Button>
        </div>
        
    );
}

export default CameraGui;