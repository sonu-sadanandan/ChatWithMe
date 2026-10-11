import { Box, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";
import type { Message } from "../types/message";
import type { User } from "../types/user";

interface MessageListProps {
  messages: Message[];
  currentUserId: User["id"];
  participants: User[];
  dayLabel: string;
}

export default function MessageList({ messages, currentUserId, participants, dayLabel }: MessageListProps) {
  const historyRef = useRef<HTMLDivElement>(null);
  const lastMessageId = messages.at(-1)?.id;

  useEffect(() => {
    const history = historyRef.current;
    if (history) history.scrollTop = history.scrollHeight;
  }, [lastMessageId]);

  return (
    <Box
      ref={historyRef}
      role="region"
      aria-label="Message history"
      tabIndex={0}
      sx={{
        flex: 1,
        minHeight: 0,
        overflowY: "auto",
        overscrollBehavior: "contain",
        px: { xs: 2, md: 4 },
        py: 3,
        "&:focus-visible": { outline: "2px solid #6551c9", outlineOffset: -2 },
      }}
    >
      <Typography
        variant="caption"
        component="p"
        sx={{ textAlign: "center", color: "#697389", mb: 3 }}
      >
        {dayLabel}
      </Typography>
      <Box
        component="ol"
        sx={{
          listStyle: "none",
          p: 0,
          m: 0,
          display: "flex",
          flexDirection: "column",
          gap: 2.5,
        }}
      >
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
            currentUserId={currentUserId}
            sender={participants.find((user) => user.id === message.senderId)}
          />
        ))}
      </Box>
    </Box>
  );
}
