import React from "react";
import Card from "@/components/UI/Card";

const FlipCard = () => {
  return (
    <div className=" flipCardContainer   w-full h-full">
      <div className="flipCard w-full h-full ">
        <div className="frontFace absolute top-0 left-0   w-full h-full min-h-60 ">
          <Card className="gap-1.5 py-6 xl:items-start xl:pl-4 text-white-50 h-full">
            <h3 className=" text-3xl md:text-4xl 2xl:text-5xl font-bold">
              Front
            </h3>
            <p className="text-lg md:text-xl">this is a front </p>
          </Card>
        </div>
        <div className="backFace relative top-0 left-0 w-full h-full min-h-60">
          <Card className="gap-1.5 py-6 xl:items-start xl:pl-4 text-white-50 h-full ">
            <p className="text-sm md:text-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
