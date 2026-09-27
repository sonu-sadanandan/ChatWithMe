import { Avatar, Box, Typography } from "@mui/material";

import type { User } from "../types/user";

interface ChatHeaderProps {
  user: User;
}

export default function ChatHeader({ user }: ChatHeaderProps) {
  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        px: { xs: 2, md: 4 },
        py: 2,
        borderBottom: "1px solid #e6e9f0",
        flexShrink: 0,
      }}
    >
      <Avatar sx={{ bgcolor: "#eeebff", color: "#6551c9", fontWeight: 600 }}>
        {user.name.charAt(0)}
      </Avatar>
      <Box>
        <Typography component="h2" variant="subtitle1" sx={{ fontWeight: 700 }}>
          {user.name}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
          <Box
            aria-hidden="true"
            sx={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              bgcolor: user.isOnline ? "#299b70" : "#9aa2b1",
            }}
          />
          <Typography variant="caption" sx={{ color: "#526b61" }}>
            {user.isOnline ? "Online" : "Offline"}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
