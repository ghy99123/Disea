import React from "react";
import { shallowEqual } from "react-redux";
import useDeepCompareEffect from "use-deep-compare-effect";
import { useAppSelector } from "../../../redux/hooks";
import { MessengerContentWrapper } from "./style";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { getDirectChatHistory } from "../../../services/socket/socketConnection";

export default function MessengerContent() {
  const { chatDetails } = useAppSelector((state) => state.chat, shallowEqual);

  useDeepCompareEffect(() => {
    // TODO: fetch chat history
    console.log("saa");
    if (chatDetails?.id) {
      getDirectChatHistory({ receiverUserId: chatDetails.id });
    }
  }, [chatDetails]);

  return (
    <MessengerContentWrapper>
      <Messages />
      <MessageInput />
    </MessengerContentWrapper>
  );
}
