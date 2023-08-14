import React, { useState } from "react";
import { styled } from "@mui/system";
import { sendDirectMessage } from "../../../services/socket/socketConnection";
import { useAppSelector } from "../../../redux/hooks";

const MainContainer = styled("div")({
  height: "60px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Input = styled("input")(({ theme }) => ({
  backgroundColor: theme.palette.black.dark,
  width: "98%",
  height: "44px",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontSize: "14px",
  padding: "0 10px",
  "&:focus": {
    outline: "none",
  },
}));

export default function MessageInput() {
  const [message, setMessage] = useState("");
  const { chatDetails } = useAppSelector((state) => state.chat);

  const handleMessageValueChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMessage(event.target.value);
  };

  const handleKeyPressed = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleSendMessage = () => {
    if (message.length > 0) {
      sendDirectMessage({
        receiverUserId: chatDetails?.id as string,
        content: message,
      });
      setMessage("");
    }
  };

  return (
    <MainContainer>
      <Input
        placeholder={`Write message to ${chatDetails?.name}`}
        value={message}
        onChange={handleMessageValueChange}
        onKeyDown={handleKeyPressed}
        // onKeyDown={handleKeyPressed}
      />
    </MainContainer>
  );
}
