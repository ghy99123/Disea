import React, { useMemo } from "react";
import { styled } from "@mui/material";
import { useAppSelector } from "../../../../redux/hooks";
import FriendListItem from "./FriendListItem";

const MainContainer = styled(`div`)({
  flexGrow: 1,
  width: "100%",
});

export default function FriendList() {
  const { friends, onlineUsers } = useAppSelector((state) => state.friends);

  const friendsWithOnlineField = useMemo(
    () =>
      friends.map((f) => {
        const onlineUserIndex = onlineUsers.findIndex(
          (user) => user.userId === f.id
        );
        return {
          ...f,
          isOnline: onlineUserIndex >= 0 ? true : false,
        };
      }),
    [friends, onlineUsers]
  );

  return (
    <MainContainer>
      {friendsWithOnlineField.map((v) => (
        <FriendListItem
          key={v.id}
          username={v.username}
          id={v.id as string}
          isOnline={v.isOnline}
        />
      ))}
    </MainContainer>
  );
}
