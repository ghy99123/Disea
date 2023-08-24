import { Tooltip } from "@mui/material";
import { MainPageButton } from "./style";
import { useRoomHandler } from "../../../hooks";

export interface IActiveRoomButtonProps {
  creatorUsername: string;
  roomId: string;
  amountOfParticipants: number;
  isUserInRoom: boolean;
}

export default function ActiveRoomButton(props: IActiveRoomButtonProps) {
  const { creatorUsername, roomId, amountOfParticipants, isUserInRoom } = props;
  const { joinRoom } = useRoomHandler();

  const handleJoinActiveRoom = () => {
    if (amountOfParticipants < 4) {
      // joinRoom
      joinRoom(roomId);
    }
  };

  const activeRoomButtonDisabled = amountOfParticipants > 3;
  const roomTitle = `Creator: ${creatorUsername}. Connected: ${amountOfParticipants}`;
  return (
    <Tooltip title={roomTitle}>
      <div>
        <MainPageButton
          variant="contained"
          disabled={activeRoomButtonDisabled || isUserInRoom}
          onClick={handleJoinActiveRoom}
        >
          {creatorUsername.slice(0, 2).toUpperCase()}
        </MainPageButton>
      </div>
    </Tooltip>
  );
}
