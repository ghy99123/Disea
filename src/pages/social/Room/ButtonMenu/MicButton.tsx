import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { Mic, MicOff } from "@mui/icons-material";

export default function MicButton() {
  const [micEnabled, setMicEnabled] = useState(false);

  const handleToggleMic = () => {
    setMicEnabled(!micEnabled);
  };

  return (
    <IconButton sx={{ color: "white" }} onClick={handleToggleMic}>
      {micEnabled ? <Mic /> : <MicOff />}
    </IconButton>
  );
}
