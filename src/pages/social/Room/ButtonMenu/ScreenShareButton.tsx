import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { ScreenShare, StopScreenShare } from "@mui/icons-material";

export default function ScreenShareButton() {
  const [screenShareEnabled, setScreenShareEnabled] = useState(false);

  const handleToggleScreenShare = () => {
    setScreenShareEnabled(!screenShareEnabled);
  };

  return (
    <IconButton sx={{ color: "white" }} onClick={handleToggleScreenShare}>
      {screenShareEnabled ? <ScreenShare /> : <StopScreenShare />}
    </IconButton>
  );
}
