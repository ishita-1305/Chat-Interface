import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import Message from "./Message";

const ChatWindow = () => {
  const messages = useSelector((state) => state.chat.messages);
  const chatEndRef = useRef(null);

  // Auto-scroll to the bottom of the chat window
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Box
      sx={{
        maxHeight: "400px",
        overflowY: "auto",
        p: 2,
        backgroundColor: "#f5f5f5",
      }}
    >
      {messages.map((msg, index) => (
        <Message
          key={index}
          text={msg.text}
          sender={msg.sender}
          timestamp={msg.timestamp}
        />
      ))}
      <div ref={chatEndRef} />
    </Box>
  );
};

export default ChatWindow;
