import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z
    .email('Enter a valid email address')
    .trim()
    .toLowerCase()
    .min(1, "Email is required"),
    message: z.string().min(1, "Message is required"),
});
