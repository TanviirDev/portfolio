import React, { useEffect, useRef } from "react";
import type { ChatMessage } from "@/components/Chat";
interface ChatMessagesProps {
  chatMessages: ChatMessage[];
  isChatInitiated: boolean;
}
function ChatMessages({ chatMessages, isChatInitiated }: ChatMessagesProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  return (
    <div
      id="messageContainer"
      className="flex flex-col w-full px-4 m-auto overflow-y-auto  max-h-150 scrollbar-gray "
    >
      {isChatInitiated ? (
        chatMessages.map((msg, index) => (
          <div
            key={index}
            className={`my-2 p-3 rounded-md max-w-[80%] text-white ${
              msg.role === "user"
                ? "self-end bg-blue-500 "
                : "self-start bg-gray-800"
            }`}
          >
            {msg.content}
          </div>
        ))
      ) : (
        <Info />
      )}
      <div ref={messagesEndRef} />
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
