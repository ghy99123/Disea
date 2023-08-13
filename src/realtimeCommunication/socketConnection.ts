import io from "socket.io-client";
import { store } from "../redux/store";
import {
  setPendingFriendsInvitations,
  setFriends,
} from "../redux/reducers/friends/friendsSlice";

let socket: any = null;

export const connectWithSocketServer = (userToken: string) => {
  socket = io("http://localhost:5002", {
    auth: {
      token: userToken,
    },
  });

  socket.on("connect", () => {
    console.log("successfully connected with socket.io server");
    console.log(socket.id);
  });

  socket.on("friend-invitations", (data: any) => {
    const { pendingInvitations } = data;
    store.dispatch(setPendingFriendsInvitations(pendingInvitations));
  });

  socket.on("friends-list", (data: any) => {
    const { friends } = data;
    store.dispatch(setFriends(friends));
  });
};
