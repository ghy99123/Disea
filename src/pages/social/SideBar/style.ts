import { styled, Button } from "@mui/material";

export const MainContainer = styled(`div`)(({ theme }) => ({
  width: "72px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: theme.palette.black.dark,
}));

export const MainPageButton = styled(Button)({
  width: "48px",
  height: "48px",
  borderRadius: "16px",
  marginTop: "10px",
  padding: 0,
});
