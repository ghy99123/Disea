import { styled } from "@mui/material";

export const InputWrapper = styled(`div`)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
}));

export const Label = styled(`p`)(({ theme }) => ({
  textTransform: "uppercase",
  fontWeight: 600,
  fontSize: "0.8rem",
  color: theme.palette.text.secondary,
}));

export const Input = styled("input")(({ theme }) => ({
  flexGrow: 1,
  height: "40px",
  backgroundColor: theme.palette.black.dark,
  border: "none",
  color: theme.palette.text.primary,
  padding: "0 14px",
  fontSize: "16px",
  borderRadius: "5px",
  "&:focus": {
    outline: "none",
  },
}));
