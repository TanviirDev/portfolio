import React from "react";
// import { experiences } from "@/constants";
import Image from "next/image";
import Card from "./UI/Card";
import { getWorkExperience } from "@/sanity/sanityQueries";
import { MoveUpRight } from "lucide-react";

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
    <section className="mt-10 mb-40 px-5 xl:px-0">
      <h1 className="text-3xl text-center mb-8 font-bold">
        Professional Work Experience
      </h1>
      <div className="all-experiences relative">
        <div className="gradient-line w-0.5 h-full absolute left-7  xl:left-1/3 xl:translate-x-10"></div>
        {experiences.map((experience) => (
          <div
            id="experience-container flex flex-col xl:flex-row "
            key={experience.id}
            className=" my-4 flex flex-col xl:flex-row-reverse "
          >
            <div className="experience flex flex-2 xl:ml-5">
              <div className="logo ">
                <div className="w-14 h-14 rounded-full flex justify-center items-center bg-zinc-900 z-10 relative">
                  <Image
                    className="w-10 h-10 rounded-full object-cover"
                    src={experience.company.logo}
                    alt={experience.company.name}
                    width={100}
                    height={100}
                  />
                </div>
              </div>
              <div className="experience-info ml-2">
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
            <div className="company  xl:justify-start xl:flex-1 py-2">
              <Card className="justify-start items-start px-5 relative z-10 ">
                <div className="w-35 h-10 mt-4 relative mb-2">
                  <Image
                    className=" object-cover rounded-lg"
                    src={experience.company.image}
                    alt={experience.company.name}
                    fill
                  ></Image>
                </div>

                <p className="text-start ">{experience.company.bio}</p>
                <div className="flex text-[#CBACF9] my-4">
                  <p className="">View Company</p>
                  <MoveUpRight className=" p-0.5" />
                </div>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
