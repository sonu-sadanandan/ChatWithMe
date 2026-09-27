import { Box, List, Typography } from "@mui/material";
import ConversationItem from "./ConversationItem";
import type { Conversation } from "../types/conversation";
import type { User } from "../types/user";

interface ConversationListProps {
  conversations: Conversation[];
  currentUserId: User["id"];
  selectedConversationId: Conversation["id"];
}

export default function ConversationList({ conversations, currentUserId, selectedConversationId }: ConversationListProps) {
  return (
    <Box
      component="aside"
      aria-labelledby="conversations-heading"
      sx={{
        width: { xs: "100%", sm: 260, md: 300 },
        flexShrink: 0,
        p: { xs: 1.5, sm: 2.5 },
        borderRight: { sm: "1px solid #e6e9f0" },
        borderBottom: { xs: "1px solid #e6e9f0", sm: 0 },
        bgcolor: "#fbfcfe",
      }}
    >
      <Typography
        id="conversations-heading"
        component="h2"
        variant="subtitle2"
        sx={{ mb: { xs: 1, sm: 2.5 }, color: "#697389", fontWeight: 700 }}
      >
        Conversations
      </Typography>
      <List disablePadding aria-label="Conversations">
        {conversations.map((conversation) => (
          <ConversationItem
            key={conversation.id}
            conversation={conversation}
            currentUserId={currentUserId}
            isSelected={conversation.id === selectedConversationId}
          />
        ))}
      </List>
    </Box>
  );
}
