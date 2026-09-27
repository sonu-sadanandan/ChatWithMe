import SendRounded from "@mui/icons-material/SendRounded";
import { Box, Button, TextField } from "@mui/material";

export default function MessageInput() {
  return (
    <Box
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
        placeholder="Type a message..."
        slotProps={{ htmlInput: { "aria-label": "Message" } }}
        sx={{
          "& .MuiOutlinedInput-root": { borderRadius: 3, bgcolor: "#fbfcfe" },
        }}
      />
      <Button
        type="button"
        variant="contained"
        disabled
        aria-label="Send message (not available yet)"
        sx={{ minWidth: 56, height: 56, borderRadius: 3 }}
      >
        <SendRounded />
      </Button>
    </Box>
  );
}
