import React from "react";
import { Box, Typography } from "@mui/material";

const Message = ({ text, sender, timestamp }) => {
  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="caption" color="text.secondary">
        {sender} • {new Date(timestamp).toLocaleTimeString()}
      </Typography>
      <Typography>{text}</Typography>
    </Box>
  );
};

export default Message;
