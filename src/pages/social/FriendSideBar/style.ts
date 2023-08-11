import { styled, Button, Typography } from "@mui/material";

export const FriendSideBarContainer = styled(`div`)(({ theme }) => ({
  width: "224px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: theme.palette.black.main,
}));

export const AddFriendButton = styled(Button)({
  marginTop: "10px",
  marginLeft: "5px",
  width: "80%",
  height: "30px",
  background: "#3ba55d",
});

export const FriendsTitle = styled(Typography)({
  textTransform: "uppercase",
  fontSize: "14px",
  marginTop: "10px",
  color: "#8e9297",
});

export const FriendListItemButton = styled(Button)({
  height: "42px",
  width: "100%",
  marginTop: "10px",
  display: "flex",
  // alignItems: "center",
  justifyContent: "flex-start",
  position: "relative",
  color: "white",
});
