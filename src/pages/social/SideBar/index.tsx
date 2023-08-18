import * as React from "react";
import GroupIcon from "@mui/icons-material/Groups";
import AddIcon from "@mui/icons-material/Add";
import { useRoomHandler } from "../../../hooks";
import { MainContainer, MainPageButton } from "./style";
import { useAppSelector } from "../../../redux/hooks";
import ActiveRoomButton from "./ActiveRoomButton";

export interface ISideBarProps {}

export default function SideBar(props: ISideBarProps) {
  const { activeRooms, isUserInRoom } = useAppSelector((state) => state.room);
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
      {activeRooms.map((room) => {
        return (
          <ActiveRoomButton
            key={room.roomId}
            creatorUsername={room.creatorUserName as string}
            roomId={room.roomId}
            amountOfParticipants={room.participants.length}
            isUserInRoom={isUserInRoom}
          />
        );
      })}
    </MainContainer>
  );
}
