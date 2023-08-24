import React from "react";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import { useRoomHandler } from "../../../../hooks";

export default function CloseButton() {
  const { leaveRoom } = useRoomHandler();

  const handleClickClose = () => {
    leaveRoom();
  };

  return (
    <IconButton sx={{ color: "white" }} onClick={handleClickClose}>
      <Close />
    </IconButton>
  );
}
