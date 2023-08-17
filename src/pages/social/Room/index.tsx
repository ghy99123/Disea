import React, { useState } from "react";
import { RoomMainContainer } from "./style";

export default function Room() {
  const [isRoomMinimized, setIsRoomMinimized] = useState<boolean>(true);

  const roomResizeHandler = () => {
    setIsRoomMinimized(!isRoomMinimized);
  };

  return <RoomMainContainer fullScreen={!isRoomMinimized}></RoomMainContainer>;
}
