import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "62397x38",
  dataset: "content",
  apiVersion: "2024-01-01",
  useCdn: true,
});
