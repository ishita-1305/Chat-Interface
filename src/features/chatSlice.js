import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
  currentUser: "User1", // Mock current user
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    sendMessage: (state, action) => {
      state.messages.push({
        text: action.payload.text,
        sender: state.currentUser,
        timestamp: new Date().toISOString(),
      });
    },
    receiveMessage: (state, action) => {
      state.messages.push({
        text: action.payload.text,
        sender: "User2", // Mock other user
        timestamp: new Date().toISOString(),
      });
    },
  },
});

export const { sendMessage, receiveMessage } = chatSlice.actions;
export default chatSlice.reducer;
