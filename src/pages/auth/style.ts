import { styled } from "@mui/material";

export const BoxWrapper = styled(`div`)(({ theme }) => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: theme.palette.primary.main,
}));

export const Box = styled(`div`)(({ theme }) => ({
  width: 700,
  padding: "32px",
  borderRadius: "5px",
  backgroundColor: theme.palette.black.main,
  boxShadow: "0 2px 10px 0 rgba(0 0 0 / 20%)",
  display: "flex",
  flexDirection: "column",
}));

export const TitleContainer = styled(`div`)({
  textAlign: "center",
});
