import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface RoomState {
  isUserInRoom: boolean;
  isUserRoomCreator: boolean;
  roomDetails: any;
  activeRooms: any[];
  localStream: any;
  remoteStreams: any[];
  screenSharingStream: any;
  audioOnly: boolean;
  isScreenSharingActive: boolean;
}

const initialState: RoomState = {
  isUserInRoom: false,
  isUserRoomCreator: false,
  roomDetails: null,
  activeRooms: [],
  localStream: null,
  remoteStreams: [],
  screenSharingStream: null,
  audioOnly: false,
  isScreenSharingActive: false,
};

export const RoomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    openRoom: (
      state,
      action: PayloadAction<
        Pick<RoomState, "isUserInRoom" | "isUserRoomCreator">
      >
    ) => ({
      ...state,
      isUserInRoom: action.payload.isUserInRoom,
      isUserRoomCreator: action.payload.isUserRoomCreator,
    }),
    setRoomDetails: () => {},
    setActiveRooms: () => {},
    setLocalStream: () => {},
    setRemoteStreams: () => {},
    setAudioOnly: () => {},
    setScreenShareStream: () => {},
  },
});

export const { openRoom } = RoomSlice.actions;
export default RoomSlice.reducer;
