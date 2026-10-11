import type { Message } from "./message";
import type { User } from "./user";

export interface Conversation {
  id: string;
  /** Two participants in a direct conversation. */
  participants: [User, User];
  lastMessage: Message | null;
}
