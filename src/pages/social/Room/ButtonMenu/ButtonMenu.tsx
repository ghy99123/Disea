import React from "react";
import CameraButton from "./CameraButton";
import CloseButton from "./CloseButton";
import MicButton from "./MicButton";
import ScreenShareButton from "./ScreenShareButton";
import { useAppSelector } from "../../../../redux/hooks";
import { ButtonMenuContainer } from "../style";

export default function ButtonMenu() {
  const { localStream } = useAppSelector((state) => state.room);

  return (
    <ButtonMenuContainer>
      <CameraButton localStream={localStream} />
      <MicButton localStream={localStream} />
      <ScreenShareButton />
      <CloseButton />
    </ButtonMenuContainer>
  );
}
