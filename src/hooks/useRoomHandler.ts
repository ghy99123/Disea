import { useDispatch } from "react-redux";
import {
  openRoom,
  setRoomDetails,
  setLocalStream,
  setRemoteStreams,
} from "../redux/reducers/room/roomSlice";
import {
  emitRoomCreate,
  emitJoinRoom,
  emitLeaveRoom,
} from "../services/socket/socketConnection";
import { useAppSelector } from "../redux/hooks";
import {
  closeAllConnections,
  getLocalStreamVideo,
} from "../services/socket/webRTCHandler";

// handle everything with video room function
const useRoomHandler = () => {
  const dispatch = useDispatch();
  const { roomDetails, audioOnly, localStream } = useAppSelector(
    (state) => state.room
  );

  const createRoom = () => {
    const callbackFn = () => {
      dispatch(
        openRoom({
          isUserInRoom: true,
          isUserRoomCreator: true,
        })
      );
      emitRoomCreate();
    };

    getLocalStreamVideo(audioOnly, callbackFn);
  };

  const joinRoom = (roomId: string) => {
    const callbackFn = () => {
      dispatch(setRoomDetails({ roomId }));
      dispatch(openRoom({ isUserInRoom: true, isUserRoomCreator: false }));
      emitJoinRoom({ roomId });
    };
    getLocalStreamVideo(audioOnly, callbackFn);
  };

  const leaveRoom = () => {
    const roomId = roomDetails?.roomId;
    if (roomId) {
      if (localStream) {
        localStream.getTracks().forEach((track) => track.stop());
        dispatch(setLocalStream(null));
      }
      dispatch(setRemoteStreams([]));
      closeAllConnections();
      console.log("test1");

      dispatch(setRoomDetails(null));
      dispatch(openRoom({ isUserInRoom: false, isUserRoomCreator: false }));
      emitLeaveRoom({ roomId });
    }
  };

  return {
    createRoom,
    joinRoom,
    leaveRoom,
  };
};

export default useRoomHandler;
