"use server";
import { ContactFormSchema } from "@/lib/validation";
import { z } from "zod";

export async function sendMessage(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  const parsedData = ContactFormSchema.safeParse({ name, email, message });
  if (!parsedData.success) {
    return new Error(`validation error: ${z.prettifyError(parsedData.error)}`);
  }
  return parsedData.data;
}
