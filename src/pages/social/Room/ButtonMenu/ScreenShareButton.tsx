import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { ScreenShare, StopScreenShare } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { setScreenShareStream } from "../../../../redux/reducers/room/roomSlice";
import { switchOutgoingTracks } from "../../../../services/socket/webRTCHandler";

const constraints = {
  audio: false,
  video: true,
};

export default function ScreenShareButton() {
  const { localStream, isScreenSharingActive, screenSharingStream } =
    useAppSelector((state) => state.room);
  const dispatch = useAppDispatch();

  const [screenShareEnabled, setScreenShareEnabled] = useState(false);

  const handleToggleScreenShare = async () => {
    setScreenShareEnabled(!screenShareEnabled);
    if (!isScreenSharingActive) {
      let stream = null;
      try {
        stream = await navigator.mediaDevices.getDisplayMedia(constraints);
      } catch (error) {
        console.log(
          "error occurs when trying to get an access to screen sharing"
        );
      }

      console.log("first", stream);
      if (stream !== null) {
        console.log("reaady", stream);
        dispatch(setScreenShareStream(stream));
        // switchOutgoing video tracks
        switchOutgoingTracks(stream);
      }
    } else {
      // switchOutgoingTracks
      switchOutgoingTracks(localStream as MediaStream);
      screenSharingStream?.getTracks().forEach((t) => t.stop());
      dispatch(setScreenShareStream(null));
    }
  };

  return (
    <IconButton sx={{ color: "white" }} onClick={handleToggleScreenShare}>
      {screenShareEnabled ? <ScreenShare /> : <StopScreenShare />}
    </IconButton>
  );
}
