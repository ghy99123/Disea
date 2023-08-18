import { Button, Tooltip } from "@mui/material";
import { Avatar } from "../../../components";
import { MainPageButton } from "./style";

export interface IActiveRoomButtonProps {
  creatorUsername: string;
  roomId: string;
  amountOfParticipants: number;
  isUserInRoom: boolean;
}

export default function ActiveRoomButton(props: IActiveRoomButtonProps) {
  const { creatorUsername, roomId, amountOfParticipants, isUserInRoom } = props;

  const handleJoinActiveRoom = () => {
    if (amountOfParticipants < 4) {
      // joinRoom
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
