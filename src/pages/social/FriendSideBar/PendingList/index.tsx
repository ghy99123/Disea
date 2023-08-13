import React from "react";
import { styled } from "@mui/material";
import PendingListItem from "./PendingListItem";
import { useAppSelector } from "../../../../redux/hooks";
import {
  acceptFriendInvitation,
  rejectFriendInvitation,
} from "../../../../services/api/social/socialApi";

const MainContainer = styled(`div`)({
  width: "100%",
  height: "22%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "auto",
});

export default function PendingList() {
  const { pendingFriendsInvitations } = useAppSelector(
    (state) => state.friends
  );

  return (
    <MainContainer>
      {pendingFriendsInvitations.map((v) => (
        <PendingListItem
          key={v._id}
          id={v._id}
          username={v.senderId.username}
          email={v.senderId.email}
          acceptFriendInvitation={() => acceptFriendInvitation(v._id)}
          rejectFriendInvitation={() => rejectFriendInvitation(v._id)}
        />
      ))}
    </MainContainer>
  );
}
