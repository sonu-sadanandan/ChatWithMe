import { Avatar, Badge, Box, ListItem, ListItemText, Typography } from "@mui/material";
import type { Conversation } from "../types/conversation";
import type { User } from "../types/user";

interface ConversationItemProps {
  conversation: Conversation;
  currentUserId: User["id"];
  isSelected: boolean;
}

export default function ConversationItem({ conversation, currentUserId, isSelected }: ConversationItemProps) {
  const participant = conversation.participants.find((user) => user.id !== currentUserId) ?? conversation.participants[0];

  return (
        <ListItem
          aria-current={isSelected ? "true" : undefined}
          sx={{
            gap: 1.5,
            p: 1.5,
            borderRadius: 2.5,
            bgcolor: isSelected ? "#eeebff" : "transparent",
            border: isSelected ? "1px solid #e1dafb" : "1px solid transparent",
          }}
        >
          <Badge
            variant="dot"
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            sx={{
              "& .MuiBadge-badge": {
                bgcolor: participant.isOnline ? "#299b70" : "#9aa2b1",
                width: 11,
                height: 11,
                borderRadius: "50%",
                border: `2px solid ${isSelected ? "#eeebff" : "#fbfcfe"}`,
              },
            }}
          >
            <Avatar
              sx={{ bgcolor: "#ddd6fb", color: "#5c46b3", fontWeight: 600 }}
            >
              {participant.name.charAt(0)}
            </Avatar>
          </Badge>
          <ListItemText
            sx={{ my: 0, minWidth: 0 }}
            primary={
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Typography component="span" sx={{ fontWeight: 600 }}>
                  {participant.name}
                </Typography>
                <Typography
                  component="span"
                  variant="caption"
                  sx={{ color: "#586878" }}
                >
                  {participant.isOnline ? "Online" : "Offline"}
                </Typography>
              </Box>
            }
            secondary={conversation.lastMessage?.content ?? "No messages yet"}
            slotProps={{
              secondary: {
                noWrap: true,
                sx: { mt: 0.25, color: "#697389", fontSize: "0.8125rem" },
              },
            }}
          />
        </ListItem>
  );
}
