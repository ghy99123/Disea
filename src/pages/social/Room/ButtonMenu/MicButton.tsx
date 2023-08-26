import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { Mic, MicOff } from "@mui/icons-material";

interface Props {
  localStream: MediaStream | null;
}

export default function MicButton(props: Props) {
  const { localStream } = props;

  const [micEnabled, setMicEnabled] = useState(true);

  const handleToggleMic = () => {
    if (localStream) {
      localStream.getAudioTracks()[0].enabled = !micEnabled;
      setMicEnabled(!micEnabled);
    }
  };

  return (
    <IconButton sx={{ color: "white" }} onClick={handleToggleMic}>
      {micEnabled ? <Mic /> : <MicOff />}
    </IconButton>
  );
}
