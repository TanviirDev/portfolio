import React from "react";
import { experiences } from "@/constants";
import Image from "next/image";
import Card from "./UI/Card";

const experience = experiences[0];

function Experience() {
  return (
    <section className="mt-10 mb-40 px-2">
      <h1 className="text-3xl text-center mb-8 font-bold">
        Professional Work Experience
      </h1>
      <div id="experience-container" className="">
        <div className="experience flex">
          <div className="logo"></div>
          <div className="experience-info">
            <h3 className="text-2xl font-bold my-2">{experience.title}</h3>
            <div className="duration flex my-4">
              <span className="mr-1">
                <Image
                  className="fill-white "
                  src="/images/calendar-days.svg"
                  width={20}
                  height={20}
                  alt="calendar icon"
                />
              </span>
              <p className="date text-white-50"> {experience.date}</p>
            </div>
            <p>{experience.description}</p>
            <ul className=" text-white-50 pl-6 list-disc mt-1">
              {experience.responsibilities.map((e, i) => (
                <li key={i} className="mb-4">
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="company">
          <Card className="justify-start">
            <h3 className="">{experience.company.name}</h3>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Experience;
