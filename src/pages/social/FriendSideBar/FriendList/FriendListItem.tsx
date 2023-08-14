import * as React from "react";
import { Avatar } from "../../../../components";
import { FriendListItemButton } from "../style";
import { Typography, Box } from "@mui/material";
import { FiberManualRecord } from "@mui/icons-material";
import { useAppDispatch } from "../../../../redux/hooks";
import { setChosenChatDetails } from "../../../../redux/reducers/chat/chatSlice";

export interface IFriendListItemProps {
  username: string;
  id: string;
  isOnline?: boolean;
}

export default function FriendListItem({
  username,
  id,
  isOnline,
}: IFriendListItemProps) {
  const dispatch = useAppDispatch();

  const handleChooseActiveConversation = () => {
    dispatch(
      setChosenChatDetails({
        chatDetails: { id, name: username },
        chatType: "direct",
      })
    );
  };

  return (
    <FriendListItemButton onClick={handleChooseActiveConversation}>
      <Avatar username={username} />
      <Typography
        sx={{
          marginLeft: "7px",
          fontWeight: 700,
          color: "#8e9297",
        }}
        variant="subtitle1"
        align="left"
      >
        {username}
      </Typography>
      {isOnline && (
        <Box
          sx={{
            color: "#3ba55d",
            display: "flex",
            alignItems: "center",
            position: "absolute",
            right: "5px",
          }}
        >
          <FiberManualRecord />
        </Box>
      )}
    </FriendListItemButton>
  );
}
