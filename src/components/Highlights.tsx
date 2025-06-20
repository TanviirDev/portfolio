import React from "react";
import FlipCard from "./UI/FlipCard";
import { highlightsData } from "@/constants";

const Highlights = () => {
  return (
    <section className="flex flex-col w-[80%] gap-4 mx-auto mb-8 xl:flex-row xl:w-[90%] xl:gap-5">
      {highlightsData.map((data) => (
        <FlipCard
          key={data.header}
          frontContent={
            <>
              <h3 className="text-3xl md:text-4xl 2xl:text-5xl font-bold">
                {data.header}
              </h3>
              <p className="text-lg md:text-xl ">{data.subHeader}</p>
            </>
          }
          backContent={
            <p className="text-sm md:text-xl ">{data.description}</p>
          }
        />
      ))}
    </section>
  );
};

export default Highlights;
