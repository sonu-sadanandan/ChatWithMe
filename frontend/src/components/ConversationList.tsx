import {
  Avatar,
  Badge,
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

export default function ConversationList() {
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
        <ListItem
          aria-current="true"
          sx={{
            gap: 1.5,
            p: 1.5,
            borderRadius: 2.5,
            bgcolor: "#eeebff",
            border: "1px solid #e1dafb",
          }}
        >
          <Badge
            variant="dot"
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            sx={{
              "& .MuiBadge-badge": {
                bgcolor: "#299b70",
                width: 11,
                height: 11,
                borderRadius: "50%",
                border: "2px solid #eeebff",
              },
            }}
          >
            <Avatar
              sx={{ bgcolor: "#ddd6fb", color: "#5c46b3", fontWeight: 600 }}
            >
              B
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
                  Bob
                </Typography>
                <Typography
                  component="span"
                  variant="caption"
                  sx={{ color: "#586878" }}
                >
                  Online
                </Typography>
              </Box>
            }
            secondary="Sounds good! See you then."
            slotProps={{
              secondary: {
                noWrap: true,
                sx: { mt: 0.25, color: "#697389", fontSize: "0.8125rem" },
              },
            }}
          />
        </ListItem>
      </List>
    </Box>
  );
}
