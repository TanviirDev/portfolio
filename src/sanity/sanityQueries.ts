import { client } from "@/sanity/client";
import {
  HIGHLIGHTS_DATA_QUERY,
  KEYTECHSTACK_QUERY,
  EXPERIENCE_QUERY,
  PROJECTS_QUERY,
} from "@/sanity/groqQueries";
import { type SanityDocument } from "next-sanity";
import { KeyTechStack } from "@/types";
import { ProjectData } from "@/types";

type SanityWorkExperience = {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  company: {
    name: string;
    logo: string;
    image: string;
    bio: string;
    link: string;
  };
};

export const getHighlightData = async () =>
  await client.fetch<SanityDocument[]>(HIGHLIGHTS_DATA_QUERY);

export const getKeyTechStack = async () =>
  await client.fetch<KeyTechStack[]>(KEYTECHSTACK_QUERY);

export const getWorkExperience = async () =>
  await client.fetch<SanityWorkExperience[]>(EXPERIENCE_QUERY);

export const getProjectData = async () =>
  await client.fetch<ProjectData[]>(PROJECTS_QUERY);
