import React, { useState } from "react";
import FriendList from "./FriendList";
import PendingList from "./PendingList";
import { FriendSideBarContainer, AddFriendButton, FriendsTitle } from "./style";
import AddFriendDialog from "./AddFriendDialog";

export interface IFriendSideBarProps {}

export default function FriendSideBar(props: IFriendSideBarProps) {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  return (
    <FriendSideBarContainer>
      <AddFriendButton
        onClick={() => setIsDialogOpen(true)}
        variant="contained"
      >
        Add Friend
      </AddFriendButton>
      <FriendsTitle>Private Messages</FriendsTitle>
      <FriendList />
      <FriendsTitle>Invitations</FriendsTitle>
      <PendingList />
      <AddFriendDialog
        isOpen={isDialogOpen}
        handleClose={() => setIsDialogOpen(false)}
      />
    </FriendSideBarContainer>
  );
}
