import React, { useContext, useState } from "react";

import Button from "react-bootstrap/Button";
import useStore from "../states/gui/guiStore";

const STOP = 0;
const LEFT = 1;
const RIGHT = 2;
const UP = 3;
const DOWN = 4;

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
      <Button
        onMouseDown={() => camRotate(LEFT)}
        onMouseUp={() => camRotate(STOP)}
      >
        +
      </Button>
      <Button
        onMouseDown={() => camRotate(RIGHT)}
        onMouseUp={() => camRotate(STOP)}
      >
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
