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
      <div style={{ width: "100%" }}>
        <button
          className="waves-effect blue btn"
          onMouseDown={() => camRotate(DIRECTIONS.RIGHT)}
          onMouseUp={() => camRotate(DIRECTIONS.NONE)}
        >
          <i className="material-icons">keyboard_arrow_left</i>
        </button>
        <button
          className="blue btn"
          onMouseDown={() => camRotate(DIRECTIONS.LEFT)}
          onMouseUp={() => camRotate(DIRECTIONS.NONE)}
        >
          <i className="material-icons">keyboard_arrow_right</i>
        </button>
      </div>
      <div>
        <button
          className="waves-effect blue btn"
          onMouseDown={() => camRotate(DIRECTIONS.DOWN)}
          onMouseUp={() => camRotate(DIRECTIONS.NONE)}
        >
          <i className="material-icons">keyboard_arrow_up</i>
        </button>
        <button
          className="blue btn"
          onMouseDown={() => camRotate(DIRECTIONS.UP)}
          onMouseUp={() => camRotate(DIRECTIONS.NONE)}
        >
          <i className="material-icons">keyboard_arrow_down</i>
        </button>
      </div>
    </div>
  );
};

const guiStyle = {
  position: "absolute",
  right: "3%",
  top: "5%",
  width: "10%",
};

export default CameraGui;
