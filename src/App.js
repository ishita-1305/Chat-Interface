import React from "react";
import { Box, Container, Typography } from "@mui/material";
import ChatWindow from "./components/ChatWindow";
import MessageInput from "./components/MessageInput";

function App() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" sx={{ textAlign: "center", mt: 4 }}>
        Chat Interface
      </Typography>
      <Box sx={{ border: "1px solid #ccc", borderRadius: 2, mt: 4 }}>
        <ChatWindow />
        <MessageInput />
      </Box>
    </Container>
  );
}

export default App;
