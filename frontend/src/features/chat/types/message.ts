export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  content: string;
  /** ISO 8601 timestamp. */
  timestamp: string;
}
