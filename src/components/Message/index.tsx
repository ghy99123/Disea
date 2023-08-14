import React from "react";
import { Typography } from "@mui/material";
import { Avatar } from "../../components";
import {
  MainContainer,
  AvatarContainer,
  MessageContainer,
  MessageContent,
  SameAuthorMessageContent,
  SameAuthorMessageText,
} from "./style";

export interface IMessageProps {
  content: string;
  username: string;
  sameAuthor: boolean;
  date: string;
  sameDay: boolean;
}

export default function Message(props: IMessageProps) {
  const { content, username, sameAuthor, date, sameDay } = props;

  if (sameAuthor && sameDay) {
    return (
      <SameAuthorMessageContent>
        <SameAuthorMessageText>{content}</SameAuthorMessageText>
      </SameAuthorMessageContent>
    );
  }

  return (
    <MainContainer>
      <AvatarContainer>
        <Avatar username={username} />
      </AvatarContainer>
      <MessageContainer>
        <Typography
          style={{ fontSize: "16px", fontWeight: 800, color: "white" }}
        >
          {username}{" "}
          <span style={{ fontSize: "12px", color: "#72767d" }}>{date}</span>
        </Typography>
        <MessageContent>{content}</MessageContent>
      </MessageContainer>
    </MainContainer>
  );
}
