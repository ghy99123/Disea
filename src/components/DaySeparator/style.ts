import { styled } from "@mui/system";

export const Separator = styled("div")(({ theme }) => ({
  // width: "100%",
  backgroundColor: theme.palette.text.secondary,
  height: "1px",
  position: "relative",
  margin: "20px 24px 10px",
}));

export const DateLabel = styled("span")(({ theme }) => ({
  backgroundColor: theme.palette.black.light,
  position: "absolute",
  left: "50%",
  top: "-10px",
  color: theme.palette.text.secondary,
  padding: "0 5px",
  fontSize: "14px",
}));
