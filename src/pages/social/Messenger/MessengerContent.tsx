import React, { useEffect } from "react";
import { useAppSelector } from "../../../redux/hooks";
import { MessengerContentWrapper } from "./style";
import Messages from "./Messages";

export default function MessengerContent() {
  const { chatDetails } = useAppSelector((state) => state.chat);

  useEffect(() => {
    // TODO: fetch chat history
  }, [chatDetails]);

  return (
    <MessengerContentWrapper>
      <Messages />
    </MessengerContentWrapper>
  );
}
