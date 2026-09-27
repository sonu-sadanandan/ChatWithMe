import { Box, Typography } from "@mui/material";
import type { Message } from "../types/message";
import type { User } from "../types/user";

interface MessageBubbleProps {
  message: Message;
  currentUserId: User["id"];
  sender: User | undefined;
}

// Keep the static demo's displayed times consistent across browser time zones.
const timeFormatter = new Intl.DateTimeFormat("en-US", {
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
  timeZone: "UTC",
});

export default function MessageBubble({ message, currentUserId, sender }: MessageBubbleProps) {
  const isSent = message.senderId === currentUserId;

  return (
    <Box
      component="li"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: isSent ? "flex-end" : "flex-start",
      }}
    >
      <Typography
        variant="caption"
        sx={{ mb: 0.75, px: 0.5, color: "#697389" }}
      >
        {isSent ? "You" : sender?.name ?? "Unknown user"}
      </Typography>
      <Box
        sx={{
          maxWidth: { xs: "88%", md: "70%" },
          px: 2,
          py: 1.5,
          borderRadius: 3,
          borderBottomRightRadius: isSent ? 4 : 12,
          borderBottomLeftRadius: isSent ? 12 : 4,
          bgcolor: isSent ? "#6551c9" : "#eef1f6",
          color: isSent ? "#fff" : "#20283f",
        }}
      >
        <Typography
          variant="body2"
          sx={{ lineHeight: 1.65, overflowWrap: "anywhere" }}
        >
          {message.content}
        </Typography>
      </Box>
      <Typography
        variant="caption"
        sx={{ mt: 0.75, px: 0.5, color: "#697389", fontSize: "0.6875rem" }}
      >
        {timeFormatter.format(new Date(message.timestamp))}
      </Typography>
    </Box>
  );
}

