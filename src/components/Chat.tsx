import React from "react";
import Card from "./UI/Card";
import ChatInput from "./UI/chatUI/ChatInput";
import ChatResponses from "./UI/chatUI/ChatResponse";
import ChatMessages from "./UI/chatUI/ChatMessages";
import { twMerge } from "tailwind-merge";

interface ChatProps {
  className?: string;
}

function Chat({ className }: ChatProps) {
  return (
    <Card className={twMerge("relative min-h-200 lg:min-h-150 p-2", className)}>
      <ChatMessages />
      <ChatInput />
    </Card>
  );
}

export default Chat;
