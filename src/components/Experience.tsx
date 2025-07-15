import React from "react";
// import { experiences } from "@/constants";
import Image from "next/image";
import Title from "./UI/Title";
import CompanyInfoCard from "./UI/CompanyInfoCard";
import ExperienceInfo from "./UI/ExperienceInfo";
import { getWorkExperience } from "@/sanity/sanityQueries";

const formatDate = (startDate: string) => {
  return new Date(startDate).toLocaleString("default", {
    month: "long",
    year: "numeric",
  });
};

async function Experience() {
  const experiences = (await getWorkExperience()).map((e) => ({
    ...e,
    duration: `${formatDate(e.startDate)} - ${formatDate(e.endDate)}`,
  }));

  return (
    <section className="mt-10  px-5 xl:px-0">
      <Title title="Professional Work Experience"></Title>
      <div className="all-experiences relative">
        <div className="gradient-line w-0.5 h-full absolute left-7  xl:left-1/3 xl:translate-x-10"></div>
        {experiences.map((experience) => (
          <div
            id="experience-container flex flex-col xl:flex-row "
            key={experience.id}
            className=" my-4 flex flex-col xl:flex-row-reverse "
          >
            <ExperienceInfo
              experience={{
                title: experience.title,
                duration: experience.duration,
                description: experience.description,
                responsibilities: experience.responsibilities,
                technologies: experience.technologies,
                companyName: experience.company.name,
                companyLogo: experience.company.logo,
              }}
            />
            <CompanyInfoCard company={experience.company} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
