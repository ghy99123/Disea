import { styled } from "@mui/material";

export const MainContainer = styled("div")({
  display: "flex",
  marginTop: "20px",
  marginLeft: "16px",
});

export const AvatarContainer = styled("div")({
  width: "70px",
});

export const MessageContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
});

export const MessageContent = styled("div")({
  color: "#DCDDDE",
});

export const SameAuthorMessageContent = styled("div")({
  color: "#DCDDDE",
  // width: "97%",
});

export const SameAuthorMessageText = styled("span")({
  marginLeft: "86px",
});
