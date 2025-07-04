import { client } from "@/sanity/client";
import {
  HIGHLIGHTS_DATA_QUERY,
  KEYTECHSTACK_QUERY,
} from "@/sanity/groqQueries";
import { type SanityDocument } from "next-sanity";
import { KeyTechStack } from "@/types";

export const getHighlightData = async () =>
  await client.fetch<SanityDocument[]>(HIGHLIGHTS_DATA_QUERY);

export const getKeyTechStack = async () =>
  await client.fetch<KeyTechStack[]>(KEYTECHSTACK_QUERY);
