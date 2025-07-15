import React from "react";
import Image from "next/image";

interface ExperienceInfoProp {
  experience: {
    title: string;
    duration: string;
    description: string;
    responsibilities: string[];
    technologies: string[];
    companyName: string;
    companyLogo: string;
  };
}
function ExperienceInfo({ experience }: ExperienceInfoProp) {
  return (
    <div className="experience-info flex flex-2 xl:ml-5">
      <div className="logo ">
        <div className="w-14 h-14 rounded-full flex justify-center items-center bg-zinc-900 z-10 relative">
          <Image
            className="w-10 h-10 rounded-full object-cover"
            src={experience.companyLogo}
            alt={experience.companyName}
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className="experience-description ml-2">
        <h3 className="text-2xl font-bold my-2">{experience.title}</h3>
        <div className="duration flex my-4">
          <span className="mr-1">
            <Image
              className="fill-white object-fill"
              src="/images/calendar-days.svg"
              width={20}
              height={20}
              alt="calendar icon"
            />
          </span>
          <p className="date text-white-50"> {experience.duration}</p>
        </div>
        <p>{experience.description}</p>
        <ul className=" text-white-50 pl-6 list-disc mt-1">
          {experience.responsibilities.map((e, i) => (
            <li key={i} className="mb-4">
              {e}
            </li>
          ))}
        </ul>
        <div className="technologies flex gap-2  text-[#FFC107]">
          {experience.technologies.map((tech, i) => (
            <p
              key={i}
              className="border-1 border-color- rounded-2xl p-0.5 px-1"
            >
              {tech}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExperienceInfo;
