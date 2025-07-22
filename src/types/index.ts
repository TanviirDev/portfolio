export type KeyTechStack = {
  id: string;
  img: string;
  stack: string[];
};

export type WorkExperience = {
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
    image?: string;
    bio: string;
    link: string;
  };
};

export type ProjectData = {
  id: string;
  name: string;
  description: string;
  link?: string;
  screenshots: { url: string }[];
  technologies: string[];
};
