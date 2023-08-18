import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { Videocam, VideocamOff } from "@mui/icons-material";

export default function CameraButton() {
  const [cameraEnabled, setCameraEnabled] = useState(false);

  const handleToggleCamera = () => {
    setCameraEnabled(!cameraEnabled);
  };

  return (
    <IconButton sx={{ color: "white" }} onClick={handleToggleCamera}>
      {cameraEnabled ? <Videocam /> : <VideocamOff />}
    </IconButton>
  );
}
