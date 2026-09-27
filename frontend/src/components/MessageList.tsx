import { Box, Typography } from "@mui/material";

type Message = {
  id: number;
  sender: "you" | "bob";
  text: string;
  time: string;
};

const messages: Message[] = [
  {
    id: 1,
    sender: "bob",
    text: "Hey there! How’s your day going?",
    time: "10:30 AM",
  },
  {
    id: 2,
    sender: "you",
    text: "Hey Bob! Pretty good, thanks. How about you?",
    time: "10:31 AM",
  },
  {
    id: 3,
    sender: "bob",
    text: "Good too! Want to grab a coffee later?",
    time: "10:32 AM",
  },
  {
    id: 4,
    sender: "you",
    text: "Absolutely. Let’s meet at our usual place at 3.",
    time: "10:33 AM",
  },
  {
    id: 5,
    sender: "bob",
    text: "Sounds good! See you then.",
    time: "10:34 AM",
  },
];

function MessageBubble({ message }: { message: Message }) {
  const isSent = message.sender === "you";

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
        {isSent ? "You" : "Bob"}
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
          {message.text}
        </Typography>
      </Box>
      <Typography
        variant="caption"
        sx={{ mt: 0.75, px: 0.5, color: "#697389", fontSize: "0.6875rem" }}
      >
        {message.time}
      </Typography>
    </Box>
  );
}

export default function MessageList() {
  return (
    <Box
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
        Today
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
          <MessageBubble key={message.id} message={message} />
        ))}
      </Box>
    </Box>
  );
}
