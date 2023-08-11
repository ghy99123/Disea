import io from "socket.io-client";
import { store } from "../redux/store";
import { setPendingFriendsInvitations } from "../redux/reducers/friends/friendsSlice";

let socket: any = null;

export const connectWithSocketServer = (userToken: string) => {
  console.log("first");
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
    const { pendingInvitation } = data;

    store.dispatch(setPendingFriendsInvitations(pendingInvitation));
  });
};
