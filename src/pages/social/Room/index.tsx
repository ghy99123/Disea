import React, { useState } from "react";
import { OpenInFull, CloseFullscreen } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import ButtonMenu from "./ButtonMenu/ButtonMenu";
import Videos from "./Videos";
import { RoomMainContainer, ResizeButtonContainer } from "./style";

export default function Room() {
  const [isRoomMinimized, setIsRoomMinimized] = useState<boolean>(true);

  const roomResizeHandler = () => {
    setIsRoomMinimized(!isRoomMinimized);
  };

  return (
    <RoomMainContainer fullScreen={!isRoomMinimized}>
      <Videos />
      <ButtonMenu />
      <ResizeButtonContainer>
        <IconButton style={{ color: "white" }} onClick={roomResizeHandler}>
          {isRoomMinimized ? <OpenInFull /> : <CloseFullscreen />}
        </IconButton>
      </ResizeButtonContainer>
    </RoomMainContainer>
  );
}
