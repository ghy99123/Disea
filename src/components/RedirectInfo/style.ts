import { styled } from "@mui/material";

export const MainText = styled(`span`)(({ theme }) => ({
  marginRight: "10px",
  color: theme.palette.text.secondary,
}));

export const RedirectText = styled(`span`)(({ theme }) => ({
  color: theme.palette.info.main,
  cursor: "pointer",
  fontWeight: 500,
  "&:hover": {
    color: theme.palette.info.dark,
  },
}));
