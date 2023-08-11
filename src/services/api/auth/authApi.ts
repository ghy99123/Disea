// import axios from "../../axios";
import { post } from "../../../withAxios";
import { IUser } from "../../../redux/reducers/auth/authSlice";
import type { Result } from "../../../withAxios";

type UserDetail = {
  email: string;
  token: string;
  username: string;
};

type LoginResult = {
  userDetails: UserDetail;
};

export const registerUser = async function (userDetail: IUser) {
  const res = await post(`/auth/register`, userDetail);
  return res;
};

export const login = async function (
  userLoginInfo: Omit<IUser, "username">
): Promise<Result<LoginResult>> {
  const res = await post<LoginResult>(`/auth/login`, userLoginInfo);
  return res;
};
