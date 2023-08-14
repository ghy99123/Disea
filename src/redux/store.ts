import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth/authSlice";
import { NotificationReducer } from "./reducers/notification/notificationSlice";
import FriendsReducer from "./reducers/friends/friendsSlice";
import ChatReducer from "./reducers/chat/chatSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    notification: NotificationReducer,
    friends: FriendsReducer,
    chat: ChatReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
