import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { Videocam, VideocamOff } from "@mui/icons-material";

interface Props {
  localStream: MediaStream | null;
}

export default function CameraButton(props: Props) {
  const { localStream } = props;

  const [cameraEnabled, setCameraEnabled] = useState(true);

  const handleToggleCamera = () => {
    if (localStream) {
      localStream.getVideoTracks()[0].enabled = !cameraEnabled;
      setCameraEnabled(!cameraEnabled);
    }
  };

  return (
    <IconButton sx={{ color: "white" }} onClick={handleToggleCamera}>
      {cameraEnabled ? <Videocam /> : <VideocamOff />}
    </IconButton>
  );
}
