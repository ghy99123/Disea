import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type ConnectedSocketType = {
  socketId: string;
  userId: string;
};

export type RoomDetails = {
  roomId: string;
  participants?: ConnectedSocketType[];
  roomCreator?: ConnectedSocketType;
  creatorUserName?: string;
};

export interface RoomState {
  isUserInRoom: boolean;
  isUserRoomCreator: boolean;
  roomDetails: RoomDetails | null;
  activeRooms: RoomDetails[];
  localStream: MediaStream | null;
  remoteStreams: MediaStream[];
  screenSharingStream: MediaStream | null;
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
    setRoomDetails: (state, action: PayloadAction<RoomDetails | null>) => ({
      ...state,
      roomDetails: action.payload,
    }),
    setActiveRooms: (state, action: PayloadAction<RoomDetails[]>) => ({
      ...state,
      activeRooms: action.payload,
    }),
    setLocalStream: (state, action: PayloadAction<MediaStream | null>) => ({
      ...state,
      localStream: action.payload,
    }),
    setRemoteStreams: (state, action: PayloadAction<MediaStream[]>) => ({
      ...state,
      remoteStreams: action.payload,
    }),
    setAudioOnly: (state, action: PayloadAction<boolean>) => ({
      ...state,
      audioOnly: action.payload,
    }),
    setScreenShareStream: (
      state,
      action: PayloadAction<MediaStream | null>
    ) => {
      console.log("whuuu");
      return {
        ...state,
        isScreenSharingActive: action.payload ? true : false,
        screenSharingStream: action.payload,
      };
    },
  },
});

export const {
  openRoom,
  setRoomDetails,
  setActiveRooms,
  setLocalStream,
  setAudioOnly,
  setRemoteStreams,
  setScreenShareStream,
} = RoomSlice.actions;
export default RoomSlice.reducer;
