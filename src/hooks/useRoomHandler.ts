import { useDispatch } from "react-redux";
import { openRoom } from "../redux/reducers/room/roomSlice";

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
  };

  return {
    createRoom,
  };
};

export default useRoomHandler;
