import type { Conversation } from "../types/conversation";
import type { Message } from "../types/message";
import type { User } from "../types/user";

export const currentUser: User = {
  id: "user-alice",
  name: "Alice",
  isOnline: true,
};

const bob: User = { id: "user-bob", name: "Bob", isOnline: true };
const conversationId = "conversation-alice-bob";

export const messages: Message[] = [
  {
    id: "message-1",
    conversationId,
    senderId: bob.id,
    content: "Hey there! How’s your day going?",
    timestamp: "2026-09-27T10:30:00Z",
  },
  {
    id: "message-2",
    conversationId,
    senderId: currentUser.id,
    content: "Hey Bob! Pretty good, thanks. How about you?",
    timestamp: "2026-09-27T10:31:00Z",
  },
  {
    id: "message-3",
    conversationId,
    senderId: bob.id,
    content: "Good too! Want to grab a coffee later?",
    timestamp: "2026-09-27T10:32:00Z",
  },
  {
    id: "message-4",
    conversationId,
    senderId: currentUser.id,
    content: "Absolutely. Let’s meet at our usual place at 3.",
    timestamp: "2026-09-27T10:33:00Z",
  },
  {
    id: "message-5",
    conversationId,
    senderId: bob.id,
    content: "Sounds good! See you then.",
    timestamp: "2026-09-27T10:34:00Z",
  },
];

export const selectedConversation: Conversation = {
  id: conversationId,
  participants: [currentUser, bob],
  lastMessage: messages[messages.length - 1] ?? null,
};

export const conversations: Conversation[] = [selectedConversation];

// Preserve the static demo's day label; real date grouping comes later.
export const messageDayLabel = "Today";
