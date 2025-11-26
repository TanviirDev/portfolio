"use client";
import React from "react";
import { useState, useRef, useEffect } from "react";
import { ArrowUp } from "lucide-react";

function ChatInput() {
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const el = inputRef.current;
    if (el) {
      el.style.height = "0px";
      el.style.height = el.scrollHeight + "px";
    }
  }, [message]);

  return (
    <div className=" w-full p-2 flex flex-row justify-between rounded-md bg-black-200 outline-none mx-auto ">
      <textarea
        name="chatInput"
        className=" max-h-40 focus:outline-none overflow-y-auto scrollbar-gray resize-none  m-auto w-full"
        placeholder="Type your query..."
        ref={inputRef}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={1}
      />
      <div className="flex flex-row-reverse justify-end">
        <button className=" bg-white-50 p-2 ml-2 rounded-full w-10 h-10  hover:bg-gray-100">
          <ArrowUp className="text-black" />
        </button>
      </div>
    </div>
  );
}

export default ChatInput;
