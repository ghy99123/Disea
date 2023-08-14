import React from "react";
import { useAppSelector } from "../../../../redux/hooks";
import { Avatar } from "../../../../components";
import { MessagesHeaderContainer } from "../style";
import { Typography } from "@mui/material";

export default function MessagesHeader() {
  const { chatDetails } = useAppSelector((state) => state.chat);

  return (
    <MessagesHeaderContainer>
      <Avatar large username={chatDetails?.name as string} />
      <Typography variant="h4" sx={{ fontWeight: "bold", marginLeft: "5px" }}>
        {chatDetails?.name}
      </Typography>
      <Typography sx={{ color: "#b9bbb3", marginLeft: "5px" }}>
        {`This is the beginning of your conversation with ${chatDetails?.name}`}
      </Typography>
    </MessagesHeaderContainer>
  );
}
