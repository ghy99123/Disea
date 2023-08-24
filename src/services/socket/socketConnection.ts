import io from "socket.io-client";
import { store } from "../../redux/store";
import {
  setPendingFriendsInvitations,
  setFriends,
  setOnlineFriends,
} from "../../redux/reducers/friends/friendsSlice";
import { setMessages } from "../../redux/reducers/chat/chatSlice";
import {
  setRoomDetails,
  setActiveRooms,
} from "../../redux/reducers/room/roomSlice";
import type { MessageType } from "../../redux/reducers/chat/chatSlice";
import type { RoomDetails } from "../../redux/reducers/room/roomSlice";
import {
  SignalDataType,
  handleParticipantLeftRoom,
  handleSignalingData,
} from "./webRTCHandler";
import { prepareNewPeerConnection } from "./webRTCHandler";

let socket: any = null;

type OnlineUsers = {
  socketId: string;
  userId: string;
};

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

  socket.on("online-users", (data: { onlineUsers: OnlineUsers[] }) => {
    const { onlineUsers } = data;
    store.dispatch(setOnlineFriends(onlineUsers));
  });

  socket.on(
    "direct-chat-history",
    (data: { messages: MessageType[]; participants: string[] }) => {
      console.log(data);
      store.dispatch(setMessages(data?.messages));
      // updateDirectChatHistoryIfActive(data);
    }
  );

  socket.on("room-create", (data: { roomDetails: RoomDetails }) => {
    console.log("room-create", data);
    store.dispatch(setRoomDetails(data.roomDetails));
  });

  socket.on("active-rooms", (data: { activeRooms: RoomDetails[] }) => {
    try {
      const { activeRooms } = data;

      const friends = store.getState().friends.friends;
      const rooms: RoomDetails[] = [];

      activeRooms.forEach((room) => {
        friends.forEach((f) => {
          if (f.id === room?.roomCreator?.userId) {
            rooms.push({ ...room, creatorUserName: f.username });
          }
        });
      });

      console.log(rooms);

      store.dispatch(setActiveRooms(rooms));
    } catch (error) {
      console.log("error!!", error);
    }
  });

  socket.on("conn-prepare", (data: { connUserSocketId: string }) => {
    console.log("prepare for join connection", data);
    prepareNewPeerConnection(data.connUserSocketId, false);
    socket.emit("conn-init", data);
  });

  socket.on("conn-init", (data: { connUserSocketId: string }) => {
    prepareNewPeerConnection(data.connUserSocketId, true);
  });

  socket.on("conn-signal", (data: SignalDataType) => {
    handleSignalingData(data);
  });

  socket.on("room-participant-left", (data: { connUserSocketId: string }) => {
    console.log("user left room", data);
    handleParticipantLeftRoom(data.connUserSocketId);
  });
};

export const sendDirectMessage = (data: {
  receiverUserId: string;
  content: string;
}) => {
  console.log(data);
  socket.emit("direct-message", data);
};

export const getDirectChatHistory = (data: { receiverUserId: string }) => {
  socket.emit("direct-chat-history", data);
};

export const emitRoomCreate = () => {
  socket.emit("room-create");
};

export const emitJoinRoom = (data: { roomId: string }) => {
  socket.emit("room-join", data);
};

export const emitLeaveRoom = (data: { roomId: string }) => {
  console.log("test2");
  socket.emit("room-leave", data);
};

export const signalPeerData = (signalData: SignalDataType) => {
  socket.emit("conn-signal", signalData);
};
