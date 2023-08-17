import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type ChatDetails = {
  id: string;
  name: string;
};

export type ChatType = "direct" | "group";

export type MessageType = {
  author: {
    _id: string;
    username: string;
  };
  content: string;
  date: string;
  type: ChatType;
  _id: string;
};

export interface ChatState {
  chatDetails: ChatDetails | null;
  chatType: ChatType | null;
  messages: MessageType[];
}

const initialState: ChatState = {
  chatDetails: null,
  chatType: null,
  messages: [],
};

export const ChatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setChosenChatDetails: (
      state,
      action: PayloadAction<Omit<ChatState, "messages">>
    ) => ({
      ...state,
      ...action.payload,
      // messages: [],
    }),
    setMessages: (state, action: PayloadAction<MessageType[]>) => {
      state.messages = action.payload;
    },
    setChatType: (state, action: PayloadAction<ChatType>) => {
      state.chatType = action.payload;
    },
  },
});

export const { setChosenChatDetails, setMessages, setChatType } =
  ChatSlice.actions;
export default ChatSlice.reducer;
