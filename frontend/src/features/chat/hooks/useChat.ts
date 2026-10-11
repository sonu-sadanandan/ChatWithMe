import { useState } from "react";
import type { Conversation } from "../types/conversation";
import type { Message } from "../types/message";
import type { User } from "../types/user";
import {
  conversations,
  defaultCurrentUserId,
  users,
  messageDayLabel,
  messages as mockMessages,
  selectedConversation,
} from "../data/mockChatData";

interface UseChatResult {
  users: User[];
  currentUser: User;
  setCurrentUserId: (userId: User["id"]) => void;
  participant: User;
  selectedConversation: Conversation;
  displayedConversations: Conversation[];
  conversationMessages: Message[];
  messageDayLabel: string;
  sendMessage: (content: string) => void;
}

export default function useChat(): UseChatResult {
  const [currentUserId, setCurrentUserId] = useState<User["id"]>(defaultCurrentUserId);
  const currentUser = users.find((user) => user.id === currentUserId)!;
  const [messages, setMessages] = useState<Message[]>(() => [...mockMessages]);
  const participant =
    selectedConversation.participants.find(
      (user) => user.id !== currentUser.id,
    ) ?? selectedConversation.participants[0];
  const conversationMessages = messages.filter(
    (message) => message.conversationId === selectedConversation.id,
  );
  const displayedConversations = conversations.map((conversation) => ({
    ...conversation,
    lastMessage:
      messages.findLast((message) => message.conversationId === conversation.id) ??
      conversation.lastMessage,
  }));

  function sendMessage(content: string) {
    const trimmedContent = content.trim();
    if (!trimmedContent) return;

    const message: Message = {
      id: crypto.randomUUID(),
      conversationId: selectedConversation.id,
      senderId: currentUser.id,
      content: trimmedContent,
      timestamp: new Date().toISOString(),
    };
    setMessages((previousMessages) => [...previousMessages, message]);
  }

  return {
    users,
    currentUser,
    setCurrentUserId,
    participant,
    selectedConversation,
    displayedConversations,
    conversationMessages,
    messageDayLabel,
    sendMessage,
  };
}
