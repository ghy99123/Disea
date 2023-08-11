import React, { useEffect } from "react";
import { FriendSideBar, SideBar, Messenger, AppBar } from "./index";
import { logout } from "../../utils/auth";
import { DashboardWrapper } from "./style";
import { connectWithSocketServer } from "../../realtimeCommunication/socketConnection";
import { useAppDispatch } from "../../redux/hooks";
// import { setUserDetails } from "../../redux/reducers/auth/authSlice";

export default function Social() {
  // const dispatch = useAppDispatch();

  useEffect(() => {
    // const userDetail = localStorage.getItem("user");
    const userToken = localStorage.getItem("userToken");

    if (!userToken) {
      logout();
    } else {
      // dispatch(setUserDetails(JSON.parse(userDetail)));
      connectWithSocketServer(userToken);
    }
  }, []);

  return (
    <div>
      <DashboardWrapper>
        <SideBar />
        <FriendSideBar />
        <Messenger />
        <AppBar />
      </DashboardWrapper>
    </div>
  );
}
