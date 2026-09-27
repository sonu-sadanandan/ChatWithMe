import { Avatar, Box, Typography } from "@mui/material";

export default function ChatHeader() {
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
        B
      </Avatar>
      <Box>
        <Typography component="h2" variant="subtitle1" sx={{ fontWeight: 700 }}>
          Bob
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
          <Box
            aria-hidden="true"
            sx={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              bgcolor: "#299b70",
            }}
          />
          <Typography variant="caption" sx={{ color: "#526b61" }}>
            Online
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
