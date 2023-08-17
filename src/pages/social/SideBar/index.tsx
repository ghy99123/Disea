import * as React from "react";
import GroupIcon from "@mui/icons-material/Groups";
import AddIcon from "@mui/icons-material/Add";
import { useRoomHandler } from "../../../hooks";
import { MainContainer, MainPageButton } from "./style";

export interface ISideBarProps {}

export default function SideBar(props: ISideBarProps) {
  const roomHandler = useRoomHandler();

  const createNewRoomHandler = () => {
    // create a room and send info to the server
    roomHandler.createRoom();
  };

  return (
    <MainContainer>
      <MainPageButton variant="contained">
        <GroupIcon />
      </MainPageButton>
      <MainPageButton variant="contained" onClick={createNewRoomHandler}>
        <AddIcon />
      </MainPageButton>
    </MainContainer>
  );
}
