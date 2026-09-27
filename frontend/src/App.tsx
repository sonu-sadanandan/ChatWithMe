import ChatBubbleOutlineRounded from "@mui/icons-material/ChatBubbleOutlineRounded";
import { AppBar, Box, CssBaseline, Toolbar, Typography } from "@mui/material";
import ChatHeader from "./features/chat/components/ChatHeader";
import ConversationList from "./features/chat/components/ConversationList";
import MessageInput from "./features/chat/components/MessageInput";
import MessageList from "./features/chat/components/MessageList";

import {
  conversations,
  currentUser,
  messageDayLabel,
  messages,
  selectedConversation,
} from "./features/chat/data/mockChatData";

function App() {
  const participant =
    selectedConversation.participants.find(
      (user) => user.id !== currentUser.id,
    ) ?? selectedConversation.participants[0];
  const conversationMessages = messages.filter(
    (message) => message.conversationId === selectedConversation.id,
  );
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          height: "100dvh",
          display: "flex",
          flexDirection: "column",
          bgcolor: "#f5f6fa",
          color: "#20283f",
        }}
      >
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: "#fff",
            color: "inherit",
            borderBottom: "1px solid #e6e9f0",
          }}
        >
          <Toolbar sx={{ gap: 1.5 }}>
            <Box
              sx={{
                display: "flex",
                p: 1,
                borderRadius: 2.5,
                bgcolor: "#eeebff",
                color: "#6551c9",
              }}
            >
              <ChatBubbleOutlineRounded />
            </Box>
            <Typography
              component="h1"
              variant="h6"
              sx={{ fontWeight: 700, letterSpacing: "-0.5px" }}
            >
              ChatWithMe
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="main"
          sx={{
            flex: 1,
            minHeight: 0,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            width: "100%",
            maxWidth: 1440,
            mx: "auto",
          }}
        >
          <ConversationList
            conversations={conversations}
            currentUserId={currentUser.id}
            selectedConversationId={selectedConversation.id}
          />
          <Box
            component="section"
            aria-label={`Chat with ${participant.name}`}
            sx={{
              flex: 1,
              minWidth: 0,
              minHeight: 0,
              display: "flex",
              flexDirection: "column",
              bgcolor: "#fff",
            }}
          >
            <ChatHeader user={participant} />
            <MessageList
              messages={conversationMessages}
              currentUserId={currentUser.id}
              participants={selectedConversation.participants}
              dayLabel={messageDayLabel}
            />
            <MessageInput />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default App;
