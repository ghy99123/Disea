import { styled } from "@mui/material";

interface RoomMainContainerProps {
  fullScreen?: boolean;
}

export const RoomMainContainer = styled(`div`)<RoomMainContainerProps>(
  ({ theme, fullScreen }) => ({
    position: "absolute",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#202225",
    width: fullScreen ? "100%" : "30%",
    height: fullScreen ? "100vh" : "40vh",
    bottom: 0,
    right: 0,
  })
);

export const ResizeButtonContainer = styled(`div`)({
  position: "absolute",
  bottom: "10px",
  right: "10px",
});

export const VideoContainer = styled(`div`)({
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
  height: "85%",
});

export const ButtonMenuContainer = styled(`div`)(({ theme }) => ({
  height: "15%",
  width: "100%",
  backgroundColor: theme.palette.primary.main,
  borderTopLeftRadius: "8px",
  borderTopRightRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
