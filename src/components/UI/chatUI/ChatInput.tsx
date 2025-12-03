"use client";
import React from "react";
import { useState, useRef, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import type { ChatMessage } from "@/components/Chat";

interface ChatInputProps {
  setChatMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
  setIsChatInitiated: React.Dispatch<React.SetStateAction<boolean>>;
}

function ChatInput({ setChatMessages, setIsChatInitiated }: ChatInputProps) {
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === "") return;
    setChatMessages((prev) => [...prev, { role: "user", content: input }]);
    setIsChatInitiated(true);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };
  useEffect(() => {
    const el = inputRef.current;
    if (el) {
      el.style.height = "0px";
      el.style.height = el.scrollHeight + "px";
    }
  }, [input]);

  return (
    <div className=" w-full p-2 flex flex-row justify-between rounded-md bg-black-200 outline-none mx-auto ">
      <textarea
        name="chatInput"
        className=" max-h-40 focus:outline-none overflow-y-auto scrollbar-gray resize-none  m-auto w-full"
        placeholder="Type your query..."
        ref={inputRef}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={1}
        onKeyDown={handleKeyDown}
      />
      <div className="flex flex-row-reverse justify-end">
        <button
          className=" bg-white-50 p-2 ml-2 rounded-full w-10 h-10  hover:bg-gray-100"
          onClick={handleSubmit}
        >
          <ArrowUp className="text-black" />
        </button>
      </div>
    </div>
  );
}

export default ChatInput;
