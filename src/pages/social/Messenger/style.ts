import { styled } from "@mui/material";

export const MessengerContainer = styled(`div`)(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  backgroundColor: theme.palette.black.light,
  marginTop: "48px",
}));
