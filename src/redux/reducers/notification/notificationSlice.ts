import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface NotificationState {
  open?: boolean;
  severity?: "error" | "info" | "success" | "warning";
  message?: string;
  timeout?: number;
}

export const notificationInitialState: NotificationState = {
  open: false,
  severity: "info",
  message: "",
  timeout: 3000,
};

export const NotificationSlice = createSlice({
  name: "notification",
  initialState: notificationInitialState,
  reducers: {
    addNotification: (_state, action: PayloadAction<NotificationState>) => ({
      ...notificationInitialState,
      ...action.payload,
      open: true,
    }),
    clearNotification: (state) => ({ ...state, open: false }),
  },
});

export const { addNotification, clearNotification } = NotificationSlice.actions;
export const NotificationReducer = NotificationSlice.reducer;
