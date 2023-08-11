import { styled } from "@mui/material";

export const AppBarContainer = styled(`div`)(({ theme }) => ({
  position: "absolute",
  right: "0",
  top: "0",
  height: "48px",
  borderBottom: "1px solid black",
  backgroundColor: theme.palette.black.light,
  width: "calc(100% - 296px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 15px",
}));
