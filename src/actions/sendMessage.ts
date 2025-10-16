"use server";
import { ContactFormSchema } from "@/lib/validation";
import { z } from "zod";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  secure: false,
  auth: {
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_GMAIL_PASSWORD,
  },
});

export async function sendMessage(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  const parsedData = ContactFormSchema.safeParse({ name, email, message });
  if (!parsedData.success) {
    return new Error(`validation error: ${z.prettifyError(parsedData.error)}`);
  }

  try {
    await transporter.sendMail({
      from: process.env.NODEMAILER_EMAIL,
      to: process.env.NODEMAILER_EMAIL,
      subject: `New message from ${parsedData.data.name}`,
      text: `message: ${parsedData.data.message} \n\n from: ${parsedData.data.name}, \n email: ${parsedData.data.email}`,
    });
    return "Message sent successfully";
  } catch (error) {
    console.error("Error sending email:", error);
    return new Error("Failed to send message");
  }
}
