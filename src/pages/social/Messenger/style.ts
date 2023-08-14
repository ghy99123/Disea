import { styled } from "@mui/material";

export const MessengerContainer = styled(`div`)(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  backgroundColor: theme.palette.black.light,
  marginTop: "48px",
}));

export const WelcomeMessageContainer = styled(`div`)(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
}));

export const MessengerContentWrapper = styled(`div`)({
  flexGrow: 1,
});

export const MessengerMainAreaContainer = styled(`div`)({
  height: "calc(100% - 60px)",
  overflow: "auto",
  display: "flex",
  flexDirection: "column",
  // alignItems: "center",
});

export const MessagesHeaderContainer = styled(`div`)({
  display: "flex",
  flexDirection: "column",
  paddingTop: "15px",
  paddingLeft: "16px",
});
