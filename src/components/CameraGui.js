import React, { useContext, useState } from "react";

import Button from "react-bootstrap/Button";
import useStore from "../states/gui/guiStore";

const CameraGui = () => {
  const camRotate = useStore((state) => state.rotateCamera);
  //   const mouseDown = () => {
  //     rotateCamera(true);
  //   };

  //   const mouseUp = () => {
  //     camRotateRight(false);
  //   };

  return (
    <div style={guiStyle}>
      <Button onMouseDown={() => camRotate(1)} onMouseUp={() => camRotate(0)}>
        +
      </Button>
      <Button onMouseDown={() => camRotate(1)} onMouseUp={() => camRotate(0)}>
        -
      </Button>
    </div>
  );
};

const guiStyle = {
  position: "absolute",
  right: "5%",
  top: "5%",
};

export default CameraGui;
