import React from "react";
import FlipCard from "./UI/FlipCard";
import Card from "./UI/Card";
import FlipCardFace from "./UI/FlipCardFace";
import { highlightsData } from "@/constants";

const Highlights = () => {
  return (
    <section className="flex flex-col w-[80%] gap-4 mx-auto mb-8 xl:flex-row xl:w-[90%] xl:gap-5">
      {highlightsData.map((data) => (
        <FlipCard direction="x" key={data.header}>
          <FlipCardFace>
            <Card className="gap-1.5 py-2 xl:items-start xl:pl-4 text-white-50 h-full">
              <h3 className="text-3xl md:text-4xl 2xl:text-5xl font-bold">
                {data.header}
              </h3>
              <p className="text-lg md:text-xl ">{data.subHeader}</p>
            </Card>
          </FlipCardFace>
          <FlipCardFace backFace="x">
            <Card className="gap-1.5 py-2 xl:items-start xl:px-4 text-white-50 h-full">
              <p className="text-sm md:text-xl break-all ">
                {data.description}
              </p>
            </Card>
          </FlipCardFace>
        </FlipCard>
      ))}
    </section>
  );
};

export default Highlights;
