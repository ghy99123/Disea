import React from "react";
import { styled } from "@mui/material";
import PendingListItem from "./PendingListItem";
import { useAppSelector } from "../../../../redux/hooks";

type InvitationListItemType = {
  _id: string;
  senderId: {
    username: string;
    email: string;
  };
};

const DUMMY_INVITATIONS: InvitationListItemType[] = [
  {
    _id: "1",
    senderId: {
      username: "Mark",
      email: "3434@sss.com",
    },
  },
  {
    _id: "2",
    senderId: {
      username: "Test",
      email: "3ss4@sss.com",
    },
  },
];

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

  console.log("test pednign", pendingFriendsInvitations);

  return (
    <MainContainer>
      {pendingFriendsInvitations.map((v) => (
        <PendingListItem
          key={v._id}
          id={v._id}
          username={v.senderId.username}
          email={v.senderId.email}
          acceptFriendInvitation={() => {}}
          rejectFriendInvitation={() => {}}
        />
      ))}
    </MainContainer>
  );
}
