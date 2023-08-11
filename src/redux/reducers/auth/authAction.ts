import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "./authSlice";
import { post } from "../../../withAxios";
// import axios from "../../../services/axios";
import { login } from "../../../services/api/auth/authApi";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (userDetail: IUser, { rejectWithValue }) => {
    try {
      await post(`/auth/register`, userDetail);
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userLoginInfo: Omit<IUser, "username">, { rejectWithValue }) => {
    try {
      const userDetail = await login(userLoginInfo);
      // localStorage.setItem("user", JSON.stringify(userDetail));
      return userDetail;
    } catch (error: any) {
      console.log("err", error);
      return rejectWithValue(error?.data);
    }
  }
);
