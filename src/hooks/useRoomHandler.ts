import { useDispatch } from "react-redux";
import { openRoom } from "../redux/reducers/room/roomSlice";
import { emitRoomCreate } from "../services/socket/socketConnection";

// handle everything with video room function
const useRoomHandler = () => {
  const dispatch = useDispatch();

  const createRoom = () => {
    dispatch(
      openRoom({
        isUserInRoom: true,
        isUserRoomCreator: true,
      })
    );
    emitRoomCreate();
  };

  return {
    createRoom,
  };
};

export default useRoomHandler;
