import React from "react";
import CameraButton from "./CameraButton";
import CloseButton from "./CloseButton";
import MicButton from "./MicButton";
import ScreenShareButton from "./ScreenShareButton";
import { ButtonMenuContainer } from "../style";

export default function ButtonMenu() {
  return (
    <ButtonMenuContainer>
      <CameraButton />
      <MicButton />
      <ScreenShareButton />
      <CloseButton />
    </ButtonMenuContainer>
  );
}
