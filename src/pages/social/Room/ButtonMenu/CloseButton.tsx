import React from "react";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

export default function CloseButton() {
  const handleClickClose = () => {};

  return (
    <IconButton sx={{ color: "white" }} onClick={handleClickClose}>
      <Close />
    </IconButton>
  );
}
