"use client";
import React from "react";
import Card from "./Card";
import { SendHorizontal } from "lucide-react";
import { sendMessage } from "@/actions/sendMessage";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function ContactForm() {
  const [messageSent, setMessageSent] = useState(false);
  // const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (formDate: FormData) => {
    toast.promise(
      async () => {
        const res = await sendMessage(formDate);
        if (res instanceof Error) {
          throw res;
        }
        setMessageSent(true);

        return res;
      },
      {
        pending: "Sending message...",
        success: "Message sent successfully!",
        error: {
          render({ data }) {
            return data instanceof Error
              ? data.message
              : "Something went wrong";
          },
        },
      }
    );
  };
  return (
    <Card className="w-full items-start content-start p-8">
      <form className="w-full space-y-6" action={handleSubmit}>
        <div className="flex flex-col text-start space-y-1">
          <label className="text-white-50" htmlFor="name">
            Your name
          </label>
          <input
            className="rounded-md bg-black-200 p-2 "
            type="text"
            id="name"
            name="name"
            placeholder="What is your name?"
            required
          />
        </div>
        <div className="flex flex-col text-start space-y-1 ">
          <label className="text-white-50" htmlFor="email">
            Your email
          </label>
          <input
            className=" rounded-md bg-black-200 p-2"
            type="text"
            id="email"
            name="email"
            placeholder="What is your email?"
            required
          />
        </div>
        <div className="flex flex-col text-start space-y-1">
          <label className="text-white-50" htmlFor="message">
            Your message
          </label>
          <textarea
            rows={6}
            className="rounded-md bg-black-200 p-2 "
            id="message"
            name="message"
            placeholder="Your message here"
            required
          />
        </div>
        <ToastContainer theme="dark" autoClose={3000} />
        <div className="space-y-3 ">
          <button
            type="submit"
            className="w-full text-black hover:bg-gray-100 font-medium rounded-md p-2 bg-white-50"
          >
            Send message
            <SendHorizontal className="inline " size={20} />
          </button>

          <button className="w-full bg-white-50 text-black  hover:bg-gray-100 font-medium rounded-md p-2 ">
            Copy My Email
          </button>
        </div>
      </form>
    </Card>
  );
}

export default ContactForm;
