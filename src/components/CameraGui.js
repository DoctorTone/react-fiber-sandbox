import React, { useContext, useState } from "react";

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
      <button
        className="waves-effect blue btn"
        onMouseDown={() => camRotate(DIRECTIONS.LEFT)}
        onMouseUp={() => camRotate(DIRECTIONS.NONE)}
      >
        <i className="material-icons">arrow_back_ios</i>
      </button>
      <button
        className="blue btn"
        onMouseDown={() => camRotate(DIRECTIONS.RIGHT)}
        onMouseUp={() => camRotate(DIRECTIONS.NONE)}
      >
        <i className="material-icons">arrow_forward_ios</i>
      </button>
    </div>
  );
};

const guiStyle = {
  position: "absolute",
  right: "5%",
  top: "5%",
  color: "white",
};

export default CameraGui;
