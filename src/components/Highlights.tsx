import React from "react";
import Card from "./UI/Card";
import { highlightsData } from "@/constants";

const Highlights = () => {
  return (
    <div className="flex flex-col w-[80%] gap-4 mx-auto mb-8 xl:flex-row xl:w-[90%] xl:gap-5 ">
      {highlightsData.map((data) => (
        <Card
          key={data.header}
          className="gap-1.5 py-6 xl:items-start xl:pl-4 text-white-50"
        >
          <h3 className=" text-3xl md:text-4xl 2xl:text-5xl font-bold">
            {data.header}
          </h3>
          <p className="text-lg md:text-xl">{data.subHeader}</p>
        </Card>
      ))}
    </div>
  );
};

export default Highlights;
