import React, { useEffect } from "react";
import { FriendSideBar, SideBar, Messenger, AppBar, Room } from "./index";
import { logout } from "../../utils/auth";
import { DashboardWrapper } from "./style";
import { connectWithSocketServer } from "../../services/socket/socketConnection";
import { useAppSelector } from "../../redux/hooks";
// import { setUserDetails } from "../../redux/reducers/auth/authSlice";

export default function Social() {
  // const dispatch = useAppDispatch();

  const { isUserInRoom } = useAppSelector((state) => state.room);

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
        {isUserInRoom && <Room />}
      </DashboardWrapper>
    </div>
  );
}
