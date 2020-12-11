import React, { useContext, useState } from "react";

import "materialize-css/dist/css/materialize.min.css";
import { Button } from "react-materialize";
import DIRECTIONS from "../states/gui/directions";
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
      <Button
        onMouseDown={() => camRotate(DIRECTIONS.LEFT)}
        onMouseUp={() => camRotate(DIRECTIONS.NONE)}
      >
        +
      </Button>
      <Button
        onMouseDown={() => camRotate(DIRECTIONS.RIGHT)}
        onMouseUp={() => camRotate(DIRECTIONS.NONE)}
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
