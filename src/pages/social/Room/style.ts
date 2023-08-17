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
