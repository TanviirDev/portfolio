import React from "react";
import Card from "./UI/Card";
import Title from "./UI/Title";

import { getProjectData } from "@/sanity/sanityQueries";
import Link from "./UI/Link";
import ProjectImageGallery from "./UI/ProjectImageGallery";

async function Projects() {
  const projects = await getProjectData();
  return (
    <section id="projects" className="mb-20">
      <Title title="Project"></Title>
      <div className=" grid grid-cols-1 p-5 lg:grid-cols-2  gap-6 xl:gap-10 xl:p-0 ">
        {projects.slice(0, 4).map((project) => (
          <Card
            key={project.id}
            className="flex flex-col items-start p-4  gap-4 "
          >
            <ProjectImageGallery images={project.screenshots} />
            <div className="project-info flex flex-col justify-between gap-6">
              <div className="text-start">
                <h3 className="text-2xl xl:text-3xl font-bold my-2">
                  {project.name}
                </h3>
                <p className=" mb-4 text-white-50 xl:text-lg">
                  {project.description}
                </p>
              </div>
              <div className="flex justify-between">
                <div className=" flex gap-2 flex-wrap ">
                  {project.technologies.map((tech, i) => (
                    <p
                      className="technology-span text-sm  text-blue-200 border border-blue-700 mb-2"
                      key={i}
                    >
                      {tech}
                    </p>
                  ))}
                </div>
                {project.link && (
                  <Link link={project!.link} text="View Project" className="" />
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Projects;
