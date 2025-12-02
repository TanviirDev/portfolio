"use client";
import React from "react";
import Card from "./UI/Card";
import ChatInput from "./UI/chatUI/ChatInput";
import ChatResponses from "./UI/chatUI/ChatResponse";
import ChatMessages from "./UI/chatUI/ChatMessages";
import { twMerge } from "tailwind-merge";
import { useState } from "react";

interface ChatProps {
  className?: string;
}
export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

function Chat({ className }: ChatProps) {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [isChatInitiated, setIsChatInitiated] = useState(false);

  return (
    <Card
      id="chat"
      className={twMerge("relative min-h-200 lg:min-h-150 p-2", className)}
    >
      <ChatMessages {...{ chatMessages, isChatInitiated }} />
      <ChatInput {...{ setChatMessages, setIsChatInitiated }} />
    </Card>
  );
}

export default Chat;
