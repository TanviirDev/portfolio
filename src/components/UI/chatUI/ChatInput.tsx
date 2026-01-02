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
  const isStreamingRef = useRef(false);
  const lastAppendedRef = useRef<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === "") return;
    setChatMessages((prev) => [...prev, { role: "user", content: input }]);
    setIsChatInitiated(true);
    setInput("");

    setChatMessages((prev) => [...prev, { role: "assistant", content: "" }]);

    // Prevent double streaming in React Strict Mode (dev)
    if (isStreamingRef.current) return;
    isStreamingRef.current = true;
    try {
      await fetchChatResponse();
    } catch (error) {
      setChatMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1].content =
          "Sorry, something went wrong." + error;
        return updated;
      });
    } finally {
      isStreamingRef.current = false;
      lastAppendedRef.current = "";
    }
  };

  const fetchChatResponse = async () => {
    const res = await fetch("/api/chats", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const reader = res.body?.getReader();
    if (!reader) {
      throw new Error("No response body");
    }
    const decoder = new TextDecoder();
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      const chunk = decoder.decode(value);

      const lines = chunk.split("\n").filter((line) => line.trim());
      console.log("lines: " + lines.length);
      for (const line of lines) {
        try {
          const parsed = JSON.parse(line);
          console.log("parsed message: " + parsed.message);
          if (parsed.message) {
            setChatMessages((prev) => {
              const updated = [...prev];
              // Deduplicate identical consecutive chunks
              if (lastAppendedRef.current !== parsed.message) {
                updated[updated.length - 1].content += parsed.message;
                lastAppendedRef.current = parsed.message;
              }
              console.log(
                "updated message: " + updated[updated.length - 1].content
              );
              return updated;
            });
          }
        } catch {
          // Ignore non-JSON lines to avoid accidental duplication/noise
          // If needed, handle plain text chunks explicitly.
        }
      }
    }
  };

  // const fetchChatResponse = async () => {
  //   const res = await fetch("/api/chats", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ message: input }),
  //   });
  //   if (!res.ok) {
  //     throw new Error(res.statusText);
  //   }
  //   return (await res.json()).message;
  // };

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
