import React from "react";
import { styled } from "@mui/material";
import FriendListItem from "./FriendListItem";

type FriendListItemType = {
  id: string | number;
  username: string;
  isOnline: boolean;
};

const DUMMY_FRIENDS: FriendListItemType[] = [
  {
    id: 1,
    username: "mark",
    isOnline: true,
  },
  {
    id: 2,
    username: "sfsf",
    isOnline: false,
  },
  {
    id: 3,
    username: "aa",
    isOnline: false,
  },
];

const MainContainer = styled(`div`)({
  flexGrow: 1,
  width: "100%",
});

export default function FriendList() {
  return (
    <MainContainer>
      {DUMMY_FRIENDS.map((v) => (
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
