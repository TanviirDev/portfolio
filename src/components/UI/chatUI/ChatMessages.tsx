import React from "react";
import type { ChatMessage } from "@/components/Chat";
interface ChatMessagesProps {
  chatMessages: ChatMessage[];
  isChatInitiated: boolean;
}
function ChatMessages({ chatMessages, isChatInitiated }: ChatMessagesProps) {
  return (
    <div id="ChatContainer" className="flex flex-col m-auto">
      {isChatInitiated ? <div></div> : <Info />}
    </div>
  );
}

function Info() {
  return (
    <div className="text-white-50 p-4 flex flex-col  space-y-2">
      <div className="text-2xl">AI CHAT</div>
      <div className="">
        Hi, I am Tanvir's personal AI assistant, I can help you with any
        question you have about him.{" "}
      </div>
    </div>
  );
}

export default ChatMessages;
