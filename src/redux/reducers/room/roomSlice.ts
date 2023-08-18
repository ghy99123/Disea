import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type ConnectedSocketType = {
  socketId: string;
  userId: string;
};

export type RoomDetails = {
  participants: ConnectedSocketType[];
  roomCreator: ConnectedSocketType;
  roomId: string;
  creatorUserName?: string;
};

export interface RoomState {
  isUserInRoom: boolean;
  isUserRoomCreator: boolean;
  roomDetails: RoomDetails | null;
  activeRooms: RoomDetails[];
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
    setRoomDetails: (state, action: PayloadAction<RoomDetails>) => ({
      ...state,
      roomDetails: action.payload,
    }),
    setActiveRooms: (state, action: PayloadAction<RoomDetails[]>) => ({
      ...state,
      activeRooms: action.payload,
    }),
    setLocalStream: () => {},
    setRemoteStreams: () => {},
    setAudioOnly: () => {},
    setScreenShareStream: () => {},
  },
});

export const { openRoom, setRoomDetails, setActiveRooms } = RoomSlice.actions;
export default RoomSlice.reducer;
