import * as React from "react";
import { MessengerContainer, WelcomeMessageContainer } from "./style";
import { useAppSelector } from "../../../redux/hooks";
import MessengerContent from "./MessengerContent";

export interface IMessengerProps {}

export default function Messenger(props: IMessengerProps) {
  const { chatDetails } = useAppSelector((state) => state.chat);
  return (
    <MessengerContainer>
      {chatDetails ? (
        <MessengerContent />
      ) : (
        <WelcomeMessageContainer>
          To start chatting - choose conversation
        </WelcomeMessageContainer>
      )}
    </MessengerContainer>
  );
}
