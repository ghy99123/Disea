import React from "react";
import dayjs from "dayjs";
import { MessengerMainAreaContainer } from "../style";
import MessagesHeader from "./MessagesHeader";
import { Message, DaySeparator } from "../../../../components";
import { useAppSelector } from "../../../../redux/hooks";

export default function Messages() {
  const { messages } = useAppSelector((state) => state.chat);

  return (
    <MessengerMainAreaContainer>
      <MessagesHeader />
      {messages.map((message, index) => {
        const sameAuthor =
          index > 0 && message.author._id === messages[index - 1].author._id;
        const sameDay =
          index > 0 &&
          dayjs(message.date).format("DD/MM/YYYY") ===
            dayjs(messages[index - 1].date).format("DD/MM/YYYY");

        return (
          <div key={message._id}>
            {(!sameDay || index === 0) && (
              <DaySeparator date={dayjs(message.date).format("DD/MM/YYYY")} />
            )}
            <Message
              content={message.content}
              username={message.author.username}
              sameAuthor={sameAuthor}
              date={dayjs(message.date).format("DD/MM/YYYY")}
              sameDay={sameDay}
            />
          </div>
        );
      })}
    </MessengerMainAreaContainer>
  );
}
