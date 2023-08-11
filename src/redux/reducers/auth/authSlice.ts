import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { registerUser, loginUser } from "./authAction";

export interface IUser {
  email?: string;
  username?: string;
  password?: string;
}

export interface IAuth {
  userDetails: IUser | null;
  loading: boolean;
  userToken: string | null;
  error: any;
  success: boolean;
}

const userToken = localStorage.getItem("userToken") ?? null;

const initialState: IAuth = {
  userDetails: null,
  loading: false,
  userToken,
  error: null,
  success: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    jumpToLogin: (state) => {
      state.success = false;
    },
    setUserDetails: (state, action: PayloadAction<IUser>) => {
      state.userDetails = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userDetails = payload.data.userDetails;
        state.userToken = payload.data.userDetails.token;
        localStorage.setItem("userToken", payload.data.userDetails.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { jumpToLogin, setUserDetails } = authSlice.actions;

export default authSlice.reducer;
