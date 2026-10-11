import SendRounded from "@mui/icons-material/SendRounded";
import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

interface MessageInputProps {
  onSend: (content: string) => void;
}

export default function MessageInput({ onSend }: MessageInputProps) {
  const [draft, setDraft] = useState("");

  function sendMessage() {
    const content = draft.trim();
    if (!content) return;

    onSend(content);
    setDraft("");
  }

  return (
    <Box
      component="form"
      onSubmit={(event) => {
        event.preventDefault();
        sendMessage();
      }}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        px: { xs: 2, md: 4 },
        py: 2,
        pb: "max(16px, env(safe-area-inset-bottom))",
        borderTop: "1px solid #e6e9f0",
        flexShrink: 0,
      }}
    >
      <TextField
        fullWidth
        multiline
        maxRows={4}
        value={draft}
        onChange={(event) => setDraft(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter" && !event.shiftKey && !event.nativeEvent.isComposing && event.keyCode !== 229) {
            event.preventDefault();
            sendMessage();
          }
        }}
        placeholder="Type a message..."
        slotProps={{ htmlInput: { "aria-label": "Message" } }}
        sx={{
          "& .MuiOutlinedInput-root": { borderRadius: 3, bgcolor: "#fbfcfe" },
        }}
      />
      <Button
        type="submit"
        variant="contained"
        disabled={!draft.trim()}
        aria-label="Send message"
        sx={{ minWidth: 56, height: 56, borderRadius: 3 }}
      >
        <SendRounded />
      </Button>
    </Box>
  );
}
