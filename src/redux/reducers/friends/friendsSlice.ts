import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IFriends {
  friends: any[];
  pendingFriendsInvitations: any[];
  onlineUsers: any[];
}

const initialState: IFriends = {
  friends: [],
  pendingFriendsInvitations: [],
  onlineUsers: [],
};

export const FriendsSlice = createSlice({
  name: "friends",
  initialState,
  reducers: {
    setPendingFriendsInvitations: (state, action: PayloadAction<any[]>) => {
      state.pendingFriendsInvitations = action.payload;
    },
    setFriends: (state, action: PayloadAction<any[]>) => {
      state.friends = action.payload;
    },
    setOnlineFriends: (state, action: PayloadAction<any[]>) => {
      state.onlineUsers = action.payload;
    },
  },
});

export const { setPendingFriendsInvitations, setFriends, setOnlineFriends } =
  FriendsSlice.actions;
export default FriendsSlice.reducer;
