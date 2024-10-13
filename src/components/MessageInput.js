import React, { useState, useTransition } from "react";
import { useDispatch } from "react-redux";
import { sendMessage, receiveMessage } from "../features/chatSlice";
import { Box, Button, TextField } from "@mui/material";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const [isPending, startTransition] = useTransition();

  const handleSendMessage = () => {
    if (message.trim()) {
      startTransition(() => {
        dispatch(sendMessage({ text: message }));
      });
      setMessage("");

      // Simulate receiving a message after a delay
      setTimeout(() => {
        dispatch(receiveMessage({ text: "This is a mock response!" }));
      }, 1000);
    }
  };

  return (
    <Box sx={{ display: "flex", mt: 2 }}>
      <TextField
        fullWidth
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        variant="outlined"
        onKeyPress={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
          }
        }}
        multiline
        maxRows={4}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSendMessage}
        sx={{ ml: 2 }}
        disabled={isPending} // Optionally disable the button while pending
      >
        {isPending ? "Sending..." : "Send"}
      </Button>
    </Box>
  );
};

export default MessageInput;
