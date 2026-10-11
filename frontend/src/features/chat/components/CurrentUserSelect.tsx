import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import type { User } from "../types/user";

interface CurrentUserSelectProps {
  users: User[];
  currentUserId: User["id"];
  onUserChange: (userId: User["id"]) => void;
}

export default function CurrentUserSelect({
  users,
  currentUserId,
  onUserChange,
}: CurrentUserSelectProps) {
  return (
    <FormControl size="small" sx={{ minWidth: 160, ml: "auto" }}>
      <InputLabel id="current-user-label">Current user</InputLabel>
      <Select
        labelId="current-user-label"
        id="current-user"
        label="Current user"
        value={currentUserId}
        onChange={(event) => onUserChange(event.target.value)}
      >
        {users.map((user) => (
          <MenuItem key={user.id} value={user.id}>
            {user.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
